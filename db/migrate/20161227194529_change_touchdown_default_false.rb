class ChangeTouchdownDefaultFalse < ActiveRecord::Migration[5.0]
  def up
    change_column :stats, :touchdown, :boolean, default: false
  end

  def down
    change_column :stats, :touchdown, :boolean, default: nil
  end
end
