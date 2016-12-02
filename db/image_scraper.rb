require 'nokogiri'
require 'open-uri'
require 'pry'
require 'json'

binding.pry
@players = Player.all

@players.each do |player|
  response = Nokogiri::HTML(open('http://www.nfl.com/players/search?category=name&filter=#{player.last_name}%2C+#{player.first_name}&playerType=current'))

  player_table = response.id('result')
  binding.pry

end
