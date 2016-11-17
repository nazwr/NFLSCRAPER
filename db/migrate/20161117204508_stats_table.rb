class StatsTable < ActiveRecord::Migration[5.0]
  def change
    create_table :stats do |t|
      t.string :play_type, null: false
      t.string :yards, null: false, default: nil
      t.string :direction, null: false, default: nil
      t.boolean :complete, null: false, default: nil
      t.belongs_to :player, null: false
      t.timestamps
    end
  end
end
