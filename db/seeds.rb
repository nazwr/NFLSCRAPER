# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
### Need to fix kelvin benjamin rec td
### Need to fix tevin coleman
game_data = File.read("./public/2016/WEEK1/20160911001.json")
data_object = JSON.parse(game_data)
gamecode = "20160911001"

data_object.each do |stat|
  stat_array = stat.split(" ")
  if stat_array.include?("rush") || stat_array.include?("pass")
    unless Player.find_by(first_name: stat_array[1], last_name: stat_array[2])
      current_player = Player.create(first_name: stat_array[1], last_name: stat_array[2])
    end
    current_player = Player.find_by(first_name: stat_array[1], last_name: stat_array[2])

    if stat_array.include?("INTERCEPTED")
      Stat.create(play_type: "pass", yards: "0", direction: "none", complete: false, touchdown: false, intercepted: true, gamecode: gamecode, player: current_player)
    elsif stat_array.include?("pass") && stat_array.include?("loss")
      Stat.create(play_type: "pass", yards: "-#{stat_array[14]}" , direction: stat_array[6], complete: true, touchdown: false, gamecode: gamecode, player: current_player)
      unless Player.find_by(first_name: stat_array[8], last_name: stat_array[9])
        reciever = Player.create(first_name: stat_array[8], last_name: stat_array[9])
      end
      rec_player = Player.find_by(first_name: stat_array[8], last_name: stat_array[9])
      Stat.create(play_type:"rec", yards: "-#{stat_array[14]}", direction: stat_array[6], complete: false, touchdown: false, gamecode: gamecode, player: rec_player)
    elsif stat_array.include?("incomplete")
      Stat.create(play_type: "pass", yards: "0", direction: stat_array[7], complete: false, touchdown: false, gamecode: gamecode, player: current_player)
    elsif stat_array[3] == "pass" && stat_array.last == "TOUCHDOWN."
      Stat.create(play_type: "pass", yards: stat_array[11] , direction: stat_array[6], complete: true, touchdown: true, gamecode: gamecode, player: current_player)
      unless Player.find_by(first_name: stat_array[8], last_name: stat_array[9])
        reciever = Player.create(first_name: stat_array[8], last_name: stat_array[9])
      end
      rec_player = Player.find_by(first_name: stat_array[8], last_name: stat_array[9])
      Stat.create(play_type:"rec", yards: stat_array[11], direction: stat_array[6], complete: false, touchdown: true, gamecode: gamecode, player: rec_player)
    elsif stat_array[3] == "pass"
      Stat.create(play_type: "pass", yards: stat_array[11] , direction: stat_array[6], complete: true, touchdown: false, gamecode: gamecode, player: current_player)
      unless Player.find_by(first_name: stat_array[8], last_name: stat_array[9])
        reciever = Player.create(first_name: stat_array[8], last_name: stat_array[9])
      end
      rec_player = Player.find_by(first_name: stat_array[8], last_name: stat_array[9])
      Stat.create(play_type:"rec", yards: stat_array[11], direction: stat_array[6], complete: false, touchdown: false, gamecode: gamecode, player: rec_player)
    elsif stat_array.include?("rush") && stat_array.include?("loss")
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
