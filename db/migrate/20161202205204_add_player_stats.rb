class AddPlayerStats < ActiveRecord::Migration[5.0]
  def change
    add_column :players, :height, :string
    add_column :players, :weight, :string
    add_column :players, :born, :string
    add_column :players, :years_pro, :string
    add_column :players, :college, :string
    add_column :players, :position, :string
    add_column :players, :current_team, :string
  end
end
