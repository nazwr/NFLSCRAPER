class Stat < ActiveRecord::Base
  validates :play_type, presence: true
  validates :player, presence: true

  belongs_to :player
end
