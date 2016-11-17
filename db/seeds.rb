<<<<<<< HEAD
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

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
