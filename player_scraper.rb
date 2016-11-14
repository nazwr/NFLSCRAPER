require 'nokogiri'
require 'open-uri'
require 'pry'
require 'json'
# PLAYER INFOMATION FROM ROSTER
response = Nokogiri::HTML(open('http://www.nfl.com/teams/baltimoreravens/roster?team=BAL'))

rows = response.css('tr')
data = []

rows.each do |element|
  if element.children[3] == nil
    puts 'skipped ///////////////'
  elsif element.children[3].children.last.attributes.first.last.value[1..6] == "player"
    new_player = {}
    new_player[:name] = element.children[3].children.last.children.text
    new_player[:position] = element.children[5].children.text
    new_player[:status] = element.children[7].children.text
    new_player[:height] = element.children[9].children.text
    new_player[:weight] = element.children[11].children.text
    new_player[:birthdate] = element.children[13].children.text
    new_player[:years_pro] = element.children[15].children.text
    new_player[:college] = element.children[17].children.text
    new_player[:profile_URL] = element.children[3].children.last.attributes["href"].value

    data << new_player
  end
end

binding.pry
