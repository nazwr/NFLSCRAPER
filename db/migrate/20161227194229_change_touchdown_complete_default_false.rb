class ChangeTouchdownCompleteDefaultFalse < ActiveRecord::Migration[5.0]
  def change
    def up
      change_column :stat, :touchdown, :boolean, default: false
      change_column :stat, :complete, :boolean, default: false
    end

    def down
      change_column :stat, :touchdown, :boolean, default: nil
      change_column :stat, :complete, :boolean, default: nil
    end
  end
end
