class ChangeCompleteDefaultFalse < ActiveRecord::Migration[5.0]
  def up
    change_column :stats, :complete, :boolean, default: false
  end

  def down
    change_column :stats, :complete, :boolean, default: nil
  end
end
