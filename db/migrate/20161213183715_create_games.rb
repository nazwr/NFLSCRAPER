class CreateGames < ActiveRecord::Migration[5.0]
  def change
    create_table :games do |t|
      t.string :home, null: false
      t.string :away, null: false
      t.string :week, null: false
      t.string :gamecode, null: false

      t.timestamps
    end
  end
end
