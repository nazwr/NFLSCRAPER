require 'open-uri'
require 'nokogiri'
require 'pry'
require 'rubygems'


# doc = Nokogiri::HTML(open("http://scores.nbcsports.com/fb/pbp.asp?gamecode=20161113020&home=20&vis=14"))

doc = Nokogiri::HTML(open("http://scores.nbcsports.com/fb/scoreboard.asp"))

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
end
binding.pry
