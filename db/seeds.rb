game_data = File.read("./public/2016/WEEK1/20160908007.json")
data_object = JSON.parse(game_data)

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

    current_player = Player.find_or_create_by(first_name:stat_array[1], last_name: stat_array[2])
    new_stat = {play_type: nil, yards: nil, direction: nil, complete: nil, player: current_player.full_name}

    if stat_array.include?("rush")
      new_stat[:play_type] = "rush"
      stat_array.each do |n|
        if n.to_i != 0
          new_stat[:yards] = n
        elsif n == "left" || n == "middle" || n == "right"
          new_stat[:direction] = n
        end
      end
    elsif stat_array.include?("pass")
      new_stat[:play_type] = "pass"
      stat_array.each do |n|
        if n == "incomplete"
          new_stat[:complete] = false
        elsif n.to_i != 0
          new_stat[:complete] = true
          new_stat[:yards] = n
        elsif n == "left" || n == "middle" || n == "right"
          new_stat[:direction] = n
        end
      end
    end
    binding.pry
  end
end
