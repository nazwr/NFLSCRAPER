require 'open-uri'
require 'nokogiri'
require 'pry'
require 'rubygems'
require 'json'

game_week = 1
while game_week <= 3
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


  stat = Hash.new
  gamecodes.each do |gamecode|
    gamestatarray = []
    gameday_uri = "http://scores.nbcsports.com/fb/pbp.asp?gamecode=#{gamecode}"
    gamestat = Nokogiri::HTML(open(gameday_uri))
    c = gamestat.css('tr')

    c.each do |gamestat|
      begin
        val = gamestat.children.last.children.last.attributes["class"].value
        if val == "shsPlayDetails"
          gamestatarray << gamestat.children.last.children.last.text
        end
      rescue Exception => e
        next
      end
    end
    stat[gamecode] = gamestatarray
    File.open("#{gamecode}.json","w") do |f|
      f.write(stat[gamecode].to_json)
    end

  end

  game_week += 1
end
