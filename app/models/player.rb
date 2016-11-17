class Player < ActiveRecord::Base
  validates :first_name, presence: true
  validates :last_name, presence: true

  has_many :stats

  def full_name
    first_name + " " + last_name
  end
end
