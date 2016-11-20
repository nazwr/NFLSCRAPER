class StatsTable < ActiveRecord::Migration[5.0]
  def change
    create_table :stats do |t|
      t.string :play_type, null: false
      t.string :yards, default: nil
      t.string :direction, default: nil
      t.boolean :complete, default: nil
      t.boolean :touchdown, default: nil
      t.string :gamecode, null: false
      t.belongs_to :player, null: false
      t.timestamps
    end
  end
end
