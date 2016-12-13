class CreateGames < ActiveRecord::Migration[5.0]
  def change
    create_table :games do |t|
      t.string :home_total_stats, null: false
      t.string :away_total_stats, null: false
      t.string :gamecode, null: false

      t.timestamps
    end
  end
end
