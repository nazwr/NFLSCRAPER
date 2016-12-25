# FIX
# "Tom Brady pass to the right to Malcolm Mitchell for 4 yards for a TOUCHDOWN." FUMBLE
# STAT SEED INFO
# index = 1
# reciever = ""
# while index < 16
#   Dir.foreach("./public/stat/2016/WEEK" + "#{index}") do |file|
#     next if file == "." or file == ".."
#     game_data = File.read("./public/stat/2016/WEEK" + "#{index}/" + file)
#     gamecode = file.chomp('.json')
#     sorted_game_data = JSON.parse(game_data)
#     sorted_game_data.each do |stat|
#       unless stat.include?("2 pt conversion")
#         stat_array = stat.split(" ")
#         stat_array.delete("Sr.")
#         stat_array.delete("Jr.")
#         stat_array.delete("III")
#
#           if stat_array[1] == "FUMBLE"
#             stat_array = stat_array.drop(7)
#           end
#
#           if stat_array.include?("rush") || stat_array.include?("pass")
#             unless Player.find_by(first_name: stat_array[1], last_name: stat_array[2])
#               current_player = Player.create(first_name: stat_array[1], last_name: stat_array[2])
#             end
#               current_player = Player.find_by(first_name: stat_array[1], last_name: stat_array[2])
#
#             if stat_array.include?("pass") && !stat_array.include?("incomplete") && !stat_array.include?("INTERCEPTED")
#               unless Player.find_by(first_name: stat_array[8], last_name: stat_array[9])
#                 reciever = Player.create(first_name: stat_array[8], last_name: stat_array[9])
#               end
#                 reciever = Player.find_by(first_name: stat_array[8], last_name: stat_array[9])
#             end
#
#             if stat_array.include?("INTERCEPTED")
#               Stat.create(play_type: "pass", yards: "0", direction: "none", complete: false, touchdown: false, intercepted: true, gamecode: gamecode, player: current_player)
#             elsif stat_array.include?("incomplete")
#               Stat.create(play_type: "pass", yards: "0", direction: stat_array[7], complete: false, touchdown: false, gamecode: gamecode, player: current_player)
#             elsif stat_array.include?("pass") && stat_array.include?("loss")
#               Stat.create(play_type: "pass", yards: "-#{stat_array[14]}" , direction: stat_array[6], complete: true, touchdown: false, gamecode: gamecode, player: current_player)
#               Stat.create(play_type:"rec", yards: "-#{stat_array[14]}", direction: stat_array[6], complete: false, touchdown: false, gamecode: gamecode, player: reciever)
#             elsif stat_array[3] == "pass" && stat_array.include?("TOUCHDOWN.")
#               Stat.create(play_type: "pass", yards: stat_array[11] , direction: stat_array[6], complete: true, touchdown: true, gamecode: gamecode, player: current_player)
#               Stat.create(play_type:"rec", yards: stat_array[11], direction: stat_array[6], complete: false, touchdown: true, gamecode: gamecode, player: reciever)
#             elsif stat_array[3] == "pass"
#               Stat.create(play_type: "pass", yards: stat_array[11] , direction: stat_array[6], complete: true, touchdown: false, gamecode: gamecode, player: current_player)
#               Stat.create(play_type:"rec", yards: stat_array[11], direction: stat_array[6], complete: false, touchdown: false, gamecode: gamecode, player: reciever)
#             end
#
#             if stat_array.include?("rush") && stat_array.include?("loss")
#               Stat.create(play_type: "rush", yards: "-#{stat_array[11]}", direction: stat_array[6], complete: false, touchdown: false, gamecode: gamecode, player: current_player)
#             elsif stat_array.include?("rush") && stat_array.include?("TOUCHDOWN.")
#               Stat.create(play_type: "rush", yards: stat_array[8], direction: stat_array[6], complete: false, touchdown: true, gamecode: gamecode, player: current_player)
#             elsif stat_array.include?("rush") && stat_array.include?("no") && stat_array.include?("gain")
#               Stat.create(play_type: "rush", yards: "0", direction: stat_array[6], touchdown: false, complete: false, gamecode: gamecode, player: current_player)
#             elsif stat_array.include?("rush")
#               Stat.create(play_type: "rush", yards: stat_array[8], direction: stat_array[6], touchdown: false, complete: false, gamecode: gamecode, player: current_player)
#             end
#           end
#       end
#     end
#   end
#   index += 1
# end

# IMAGE SEED INFO
# @players = Player.all
# playerinfo = Hash.new
# @players.each do |player|
#   if player.id >= 501 && player.id <= 550
#   response = Nokogiri::HTML(open('http://www.nfl.com/players/search?category=name&filter=' + player.last_name + '%2C+' + player.first_name + '&playerType=current'))
#
#   player_table = response.css('tr')
#
#   row = player_table[4]
#
#   if row != nil
#     player_page = "http://www.nfl.com#{row.children[5].children[0].attributes["href"].value}"
#     second_call = Nokogiri::HTML(open(player_page))
#     photo_url = second_call.css('.player-photo')[0].children[1].attributes["src"].value
#     player_stats = second_call.css('.player-info')[0]
#     player_height = second_call.css('.player-info').css('p')[2].children[2].text.split(" ")[1]
#     player_weight = second_call.css('.player-info').css('p')[2].children[4].text.split(" ")[1]
#     player_born = second_call.css('.player-info').css('p')[3].children.text.split(" ")[1]
#     player_years_pro = second_call.css('.player-info').css('p')[5].children[1].text.split(" ")[1]
#     player_college = second_call.css('.player-info').css('p')[4].children[1].text.split(" ")
#       if player_college.length > 2
#         player_college = second_call.css('.player-info').css('p')[4].children[1].text.split(" ")[1] + " " + second_call.css('.player-info').css('p')[4].children[1].text.split(" ")[2]
#       else
#         player_college = second_call.css('.player-info').css('p')[4].children[1].text.split(" ").last
#       end
#     player_position = second_call.css('.player-number').text.split(" ")[1]
#     player_team = second_call.css('.player-team-links').children[1].children.text
#     player_number = second_call.css('.player-number').text.split(" ")[0]
#     playerinfo["#{player.full_name}"] = Hash.new
#     playerinfo["#{player.full_name}"]["Height"] = player_height
#     playerinfo["#{player.full_name}"]["Weight"] = player_weight
#     playerinfo["#{player.full_name}"]["Birthday"] = player_born
#     playerinfo["#{player.full_name}"]["Years Pro"] = player_years_pro
#     playerinfo["#{player.full_name}"]["College"] = player_college
#     playerinfo["#{player.full_name}"]["Team"] = player_team
#     playerinfo["#{player.full_name}"]["Position"] = player_position
#     playerinfo["#{player.full_name}"]["Number"] = player_number
#     playerinfo["#{player.full_name}"]["Photo"] = photo_url
#     puts player.full_name
#   end
# end
#
# end
#
# File.open("playerinfo4.json","w") do |f|
#   f.write(playerinfo.to_json)
# end
# PROFILE SEED INFO
# index = 4
# while index < 5
#   player_data = File.read("./public/playerprofile/playerinfo" + "#{index}.json")
#   sorted_player_data = JSON.parse(player_data)
#   sorted_player_data.each do |player|
#     name = player[0].split
#     player_name = Player.find_by(first_name: name[0], last_name: name[1])
#     player_name.height = player[1]["Height"]
#     player_name.weight = player[1]["Weight"]
#     player_name.born = player[1]["Birthday"]
#     player_name.years_pro = player[1]["Years Pro"]
#     player_name.college = player[1]["College"]
#     player_name.position = player[1]["Team"]
#     player_name.current_team = player[1]["Position"]
#     player_name.number = player[1]["Number"]
#     player_name.image = player[1]["Photo"]
#     player_name.save
#   end
# index += 1
# end


# GAME SCHEDULE
# index = 1
# while index < 15
#   game_schedule = File.read("./public/schedule/NFL_2016_WEEK" + "#{index}.json")
#   sorted_game_schedule = JSON.parse(game_schedule)
#   sorted_game_schedule.each do |game|
#     Game.create(away: game["away"], home: game["home"], week: index, gamecode: game["gamecode"])
#   end
# index += 1
# end
