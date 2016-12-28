class ChangeDirectionNullFalse < ActiveRecord::Migration[5.0]
  def up
    change_column :stats, :direction, :string, null: false
  end

  def down
    change_column :stats, :direction, :string, default: nil
  end
end
