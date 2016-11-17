game_data = File.read("./public/2016/WEEK1/20160908007.json")
data_object = JSON.parse(game_data)
skip_plays = ["Penalty:", "field", "sacked", "kicks"]

data_object.each do |stat|
  stat_array = stat.split(" ")

  if (!stat_array.include?("Penalty:") &&
    !stat_array.include?("field") &&
    !stat_array.include?("sacked") &&
    !stat_array.include?("kicked") &&
    !stat_array.include?("timeout.") &&
    !stat_array.include?("Minute") &&
    !stat_array.include?("punts") &&
    !stat_array.include?("extra") &&
    !stat_array.include?("kicks"))

      if Player.find_by(last_name: stat_array[2], first_name:stat_array[1]) != nil
        current_player = Player.find_by(first_name:stat_array[1], last_name: stat_array[2])
      else
        current_player = Player.create(first_name:stat_array[1], last_name: stat_array[2])
      end
  end
end
