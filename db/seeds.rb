# FIX
# "Tom Brady pass to the right to Malcolm Mitchell for 4 yards for a TOUCHDOWN." FUMBLE
# DELETE DREW BUTLER, ANDRE JOHNSON, ARIAN FOSTER

# player 284, 150, 331, 446, 502, 534

# STAT SEED INFO
index = 1
reciever = ""
while index < 15
  Dir.foreach("./public/2016/WEEK" + "#{index}") do |file|
    next if file == "." or file == ".."
    game_data = File.read("./public/2016/WEEK" + "#{index}/" + file)
    gamecode = file.chomp('.json')
    sorted_game_data = JSON.parse(game_data)
    sorted_game_data.each do |stat|
      unless stat.include?("2 pt conversion")
        stat_array = stat.split(" ")
        stat_array.delete("Sr.")
        stat_array.delete("Jr.")
        stat_array.delete("III")
          if stat_array.include?("rush") || stat_array.include?("pass")
            unless Player.find_by(first_name: stat_array[1], last_name: stat_array[2])
              current_player = Player.create(first_name: stat_array[1], last_name: stat_array[2])
            end
              current_player = Player.find_by(first_name: stat_array[1], last_name: stat_array[2])

            if stat_array.include?("pass") && !stat_array.include?("incomplete") && !stat_array.include?("INTERCEPTED")
              unless Player.find_by(first_name: stat_array[8], last_name: stat_array[9])
                reciever = Player.create(first_name: stat_array[8], last_name: stat_array[9])
              end
                reciever = Player.find_by(first_name: stat_array[8], last_name: stat_array[9])
            end

            if stat_array.include?("INTERCEPTED")
              Stat.create(play_type: "pass", yards: "0", direction: "none", complete: false, touchdown: false, intercepted: true, gamecode: gamecode, player: current_player)
            elsif stat_array.include?("incomplete")
              Stat.create(play_type: "pass", yards: "0", direction: stat_array[7], complete: false, touchdown: false, gamecode: gamecode, player: current_player)
            elsif stat_array.include?("pass") && stat_array.include?("loss")
              Stat.create(play_type: "pass", yards: "-#{stat_array[14]}" , direction: stat_array[6], complete: true, touchdown: false, gamecode: gamecode, player: current_player)
              Stat.create(play_type:"rec", yards: "-#{stat_array[14]}", direction: stat_array[6], complete: false, touchdown: false, gamecode: gamecode, player: reciever)
            elsif stat_array[3] == "pass" && stat_array.include?("TOUCHDOWN.")
              Stat.create(play_type: "pass", yards: stat_array[11] , direction: stat_array[6], complete: true, touchdown: true, gamecode: gamecode, player: current_player)
              Stat.create(play_type:"rec", yards: stat_array[11], direction: stat_array[6], complete: false, touchdown: true, gamecode: gamecode, player: reciever)
            elsif stat_array[3] == "pass"
              Stat.create(play_type: "pass", yards: stat_array[11] , direction: stat_array[6], complete: true, touchdown: false, gamecode: gamecode, player: current_player)
              Stat.create(play_type:"rec", yards: stat_array[11], direction: stat_array[6], complete: false, touchdown: false, gamecode: gamecode, player: reciever)
            end

            if stat_array.include?("rush") && stat_array.include?("loss")
              Stat.create(play_type: "rush", yards: "-#{stat_array[11]}", direction: stat_array[6], complete: false, touchdown: false, gamecode: gamecode, player: current_player)
            elsif stat_array.include?("rush") && stat_array.include?("TOUCHDOWN.")
              Stat.create(play_type: "rush", yards: stat_array[8], direction: stat_array[6], complete: false, touchdown: true, gamecode: gamecode, player: current_player)
            elsif stat_array.include?("rush") && stat_array.include?("no") && stat_array.include?("gain")
              Stat.create(play_type: "rush", yards: "0", direction: stat_array[6], touchdown: false, complete: false, gamecode: gamecode, player: current_player)
            elsif stat_array.include?("rush")
              Stat.create(play_type: "rush", yards: stat_array[8], direction: stat_array[6], touchdown: false, complete: false, gamecode: gamecode, player: current_player)
            end
          end
      end
    end
  end
  index += 1
end
# IMAGE SEED INFO
#
# @players = Player.all
#
#
# @players.each do |player|
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
#     if player_college.length > 2
#       player_college = second_call.css('.player-info').css('p')[4].children[1].text.split(" ")[1] + " " + second_call.css('.player-info').css('p')[4].children[1].text.split(" ")[2]
#     else
#       player_college = second_call.css('.player-info').css('p')[4].children[1].text.split(" ").last
#     end
#     player_position = second_call.css('.player-number').text.split(" ")[1]
#     player_team = second_call.css('.player-team-links').children[1].children.text
#     player_number = second_call.css('.player-number').text.split(" ")[0]
#     player.height = player_height
#     player.weight = player_weight
#     player.born = player_born
#     player.years_pro = player_years_pro
#     player.college = player_college
#     player.position = player_position
#     player.current_team = player_team
#     player.number = player_number
#     player.image = photo_url
#     puts player.full_name
#     player.save
#   end
#
# end

# rush up the middle
# rush to the right
# rush to the left
# for a loss
#



#
# index = 1
# while index <= 10
# Dir.foreach("./public/2016/WEEK" + "#{index}") do |file|
#   next if file == "." or file == ".."
#   game_data = File.read("./public/2016/WEEK" + "#{index}/" + file)
#   sorted_game_data = JSON.parse(game_data)
#   gamecode = file.chomp('.json')
#   sorted_game_data.each do |stat|
#     stat_array = stat.split(" ")
#     if stat_array.include?("rush") || stat_array.include?("pass")
#
#       unless Player.find_by(first_name: stat_array[1], last_name: stat_array[2])
#         current_player = Player.create(first_name: stat_array[1], last_name: stat_array[2])
#       end
#       current_player = Player.find_by(first_name: stat_array[1], last_name: stat_array[2])
#
#
#       if stat_array.include?("INTERCEPTED")
#         Stat.create(play_type: "pass", yards: "0", direction: "none", complete: false, touchdown: false, intercepted: true, gamecode: gamecode, player: current_player)
#       elsif stat_array.include?("pass") && stat_array.include?("loss")
#         Stat.create(play_type: "pass", yards: "-#{stat_array[14]}" , direction: stat_array[6], complete: true, touchdown: false, gamecode: gamecode, player: current_player)
#         unless Player.find_by(first_name: stat_array[8], last_name: stat_array[9])
#           reciever = Player.create(first_name: stat_array[8], last_name: stat_array[9])
#         end
#         rec_player = Player.find_by(first_name: stat_array[8], last_name: stat_array[9])
#         Stat.create(play_type:"rec", yards: "-#{stat_array[14]}", direction: stat_array[6], complete: false, touchdown: false, gamecode: gamecode, player: rec_player)
#       elsif stat_array.include?("incomplete")
#         Stat.create(play_type: "pass", yards: "0", direction: stat_array[7], complete: false, touchdown: false, gamecode: gamecode, player: current_player)
#       elsif stat_array[3] == "pass" && stat_array.last == "TOUCHDOWN."
#         Stat.create(play_type: "pass", yards: stat_array[11] , direction: stat_array[6], complete: true, touchdown: true, gamecode: gamecode, player: current_player)
#         unless Player.find_by(first_name: stat_array[8], last_name: stat_array[9])
#           reciever = Player.create(first_name: stat_array[8], last_name: stat_array[9])
#         end
#         rec_player = Player.find_by(first_name: stat_array[8], last_name: stat_array[9])
#         Stat.create(play_type:"rec", yards: stat_array[11], direction: stat_array[6], complete: false, touchdown: true, gamecode: gamecode, player: rec_player)
#       elsif stat_array[3] == "pass"
#         Stat.create(play_type: "pass", yards: stat_array[11] , direction: stat_array[6], complete: true, touchdown: false, gamecode: gamecode, player: current_player)
#         unless Player.find_by(first_name: stat_array[8], last_name: stat_array[9])
#           reciever = Player.create(first_name: stat_array[8], last_name: stat_array[9])
#         end
#         rec_player = Player.find_by(first_name: stat_array[8], last_name: stat_array[9])
#         Stat.create(play_type:"rec", yards: stat_array[11], direction: stat_array[6], complete: false, touchdown: false, gamecode: gamecode, player: rec_player)
#
#       if stat_array.include?("rush") && stat_array.include?("loss")
#         Stat.create(play_type: "rush", yards: "-#{stat_array[11]}", direction: stat_array[6], complete: false, touchdown: false, gamecode: gamecode, player: current_player)
#       elsif stat_array.include?("rush") && stat_array.include?("TOUCHDOWN.")
#         Stat.create(play_type: "rush", yards: stat_array[8], direction: stat_array[6], complete: false, touchdown: true, gamecode: gamecode, player: current_player)
#       elsif stat_array.include?("rush") && stat_array.include?("no") && stat_array.include?("gain")
#         Stat.create(play_type: "rush", yards: "0", direction: stat_array[6], touchdown: false, complete: false, gamecode: gamecode, player: current_player)
#       elsif stat_array.include?("rush")
#         Stat.create(play_type: "rush", yards: stat_array[8], direction: stat_array[6], touchdown: false, complete: false, gamecode: gamecode, player: current_player)
#       end
#
#     end
#   end
#
# end
# index += 1
# end


#
# game_data = File.read("./public/2016/WEEK1/20160911001.json")
# data_object = JSON.parse(game_data)
# gamecode = "20160911001"
#
# data_object.each do |stat|
#   stat_array = stat.split(" ")
#   if stat_array.include?("rush") || stat_array.include?("pass")
#     unless Player.find_by(first_name: stat_array[1], last_name: stat_array[2])
#       current_player = Player.create(first_name: stat_array[1], last_name: stat_array[2])
#     end
#     current_player = Player.find_by(first_name: stat_array[1], last_name: stat_array[2])
#
#     if stat_array.include?("INTERCEPTED")
#       Stat.create(play_type: "pass", yards: "0", direction: "none", complete: false, touchdown: false, intercepted: true, gamecode: gamecode, player: current_player)
#     elsif stat_array.include?("pass") && stat_array.include?("loss")
#       Stat.create(play_type: "pass", yards: "-#{stat_array[14]}" , direction: stat_array[6], complete: true, touchdown: false, gamecode: gamecode, player: current_player)
#       unless Player.find_by(first_name: stat_array[8], last_name: stat_array[9])
#         reciever = Player.create(first_name: stat_array[8], last_name: stat_array[9])
#       end
#       rec_player = Player.find_by(first_name: stat_array[8], last_name: stat_array[9])
#       Stat.create(play_type:"rec", yards: "-#{stat_array[14]}", direction: stat_array[6], complete: false, touchdown: false, gamecode: gamecode, player: rec_player)
#     elsif stat_array.include?("incomplete")
#       Stat.create(play_type: "pass", yards: "0", direction: stat_array[7], complete: false, touchdown: false, gamecode: gamecode, player: current_player)
#     elsif stat_array[3] == "pass" && stat_array.last == "TOUCHDOWN."
#       Stat.create(play_type: "pass", yards: stat_array[11] , direction: stat_array[6], complete: true, touchdown: true, gamecode: gamecode, player: current_player)
#       unless Player.find_by(first_name: stat_array[8], last_name: stat_array[9])
#         reciever = Player.create(first_name: stat_array[8], last_name: stat_array[9])
#       end
#       rec_player = Player.find_by(first_name: stat_array[8], last_name: stat_array[9])
#       Stat.create(play_type:"rec", yards: stat_array[11], direction: stat_array[6], complete: false, touchdown: true, gamecode: gamecode, player: rec_player)
#     elsif stat_array[3] == "pass"
#       Stat.create(play_type: "pass", yards: stat_array[11] , direction: stat_array[6], complete: true, touchdown: false, gamecode: gamecode, player: current_player)
#       unless Player.find_by(first_name: stat_array[8], last_name: stat_array[9])
#         reciever = Player.create(first_name: stat_array[8], last_name: stat_array[9])
#       end
#       rec_player = Player.find_by(first_name: stat_array[8], last_name: stat_array[9])
#       Stat.create(play_type:"rec", yards: stat_array[11], direction: stat_array[6], complete: false, touchdown: false, gamecode: gamecode, player: rec_player)
#     elsif stat_array.include?("rush") && stat_array.include?("loss")
#       Stat.create(play_type: "rush", yards: "-#{stat_array[11]}", direction: stat_array[6], complete: false, touchdown: false, gamecode: gamecode, player: current_player)
#     elsif stat_array.include?("rush") && stat_array.include?("TOUCHDOWN.")
#       Stat.create(play_type: "rush", yards: stat_array[8], direction: stat_array[6], complete: false, touchdown: true, gamecode: gamecode, player: current_player)
#     elsif stat_array.include?("rush") && stat_array.include?("no") && stat_array.include?("gain")
#       Stat.create(play_type: "rush", yards: "0", direction: stat_array[6], touchdown: false, complete: false, gamecode: gamecode, player: current_player)
#     elsif stat_array.include?("rush")
#       Stat.create(play_type: "rush", yards: stat_array[8], direction: stat_array[6], touchdown: false, complete: false, gamecode: gamecode, player: current_player)
#     end
#
#   end
# end
#




# data_object.each do |stat|
#   stat_array = stat.split(" ")
#
#   if (!stat_array.include?("Penalty:") &&
#     !stat_array.include?("field") &&
#     !stat_array.include?("sacked") &&
#     !stat_array.include?("kicked") &&
#     !stat_array.include?("timeout.") &&
#     !stat_array.include?("Minute") &&
#     !stat_array.include?("punts") &&
#     !stat_array.include?("extra") &&
#     !stat_array.include?("kicks"))
#
#     current_player = Player.find_or_create_by(first_name:stat_array[1], last_name: stat_array[2])
#     new_stat = Stat.new(player: current_player)
#     new_stat.gamecode = "20160911001"
#
#     if stat_array.include?("rush")
#       new_stat.play_type = "rush"
#       stat_array.each do |n|
#         if n.to_i != 0
#           new_stat.yards = n
#         elsif n == "left" || n == "middle" || n == "right"
#           new_stat.direction = n
#         end
#       end
#
#     elsif stat_array.include?("pass")
#       new_stat.play_type = "pass"
#       stat_array.each_with_index do |n, index|
#         if n == "incomplete"
#           new_stat.complete = false
#           rec_stat = nil
#         elsif n.to_i != 0
#           new_stat.complete = true
#           new_stat.yards = n
#         elsif n == "left" || n == "middle" || n == "right"
#           new_stat.direction = n
#         end
#       end
#
#     end
#
#     if new_stat.play_type == "pass" && new_stat.complete == true
#       rec_stat = Stat.new(play_type: "rec")
#       rec_stat.gamecode = "20160911001"
#       rec_stat.yards = new_stat.yards
#       rec_player = nil
#       stat_array.each_with_index do |t, index|
#         if t == "left" || t == "middle" || t == "right"
#           rec_player = Player.find_or_create_by(first_name: stat_array[index + 2], last_name: stat_array[index + 3])
#         end
#       end
#       rec_stat.player = rec_player
#       rec_stat.direction = new_stat.direction
#       rec_stat.complete = true
#
#     end
#
#     if stat_array.include?("TOUCHDOWN.")
#       new_stat.touchdown = true
#     end
#
#     new_stat.save
#
#     if rec_stat != nil
#       if stat_array.include?("TOUCHDOWN.")
#         rec_stat.touchdown = true
#       end
#
#       rec_stat.save
#     end
#
#   end
# end
