require 'open-uri'
require 'nokogiri'
require 'pry'
require 'rubygems'
require 'json'

game_week = 17
while game_week <= 17
  doc = Nokogiri::HTML(open("http://scores.nbcsports.com/fb/scoreboard.asp?week=#{game_week}"))
  a = doc.css('a')
  array = []
  a.each do |thing|
    if thing.text == "Box"
      array << thing
    end
  end


  gamecodes = []
  array.each do |href|
    b = href.attributes["href"].value.split("=")[1].split("&").first
    gamecodes << b
  end

  full_schedule = []

  gamecodes.each do |gamecode|
    schedule = Hash.new
    gamestatarray = []
    gameday_uri = "http://scores.nbcsports.com/fb/pbp.asp?gamecode=#{gamecode}"
    gamestat = Nokogiri::HTML(open(gameday_uri))
    c = gamestat.css('tr')
    schedule[:away] = c[4].children[1].children[1].children.text
    schedule[:home] = c[5].children[1].children[1].children.text
    schedule[:week] = "#{game_week}"
    schedule[:gamecode] = "#{gamecode}"
    full_schedule << schedule
  end

  File.open("NFL_2016_WEEK#{game_week}.json","w") do |f|
    f.write(full_schedule.to_json)
  end

  game_week += 1
end
