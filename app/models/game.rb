class Game < ActiveRecord::Base
  validates :home, presence: true
  validates :away, presence: true
  validates :week, presence: true
  validates :gamecode, presence: true
end
