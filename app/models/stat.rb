class Stat < ActiveRecord::Base
  validates :play_type, presence: true
  validates :player, presence: true

  belongs_to :player

  def plain_text
    "#{player.full_name} #{play_type}es to the #{direction} for #{yards} yards"
  end
end
