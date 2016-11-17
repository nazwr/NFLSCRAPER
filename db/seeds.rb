# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

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

  end
end
