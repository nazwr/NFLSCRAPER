class Player < ActiveRecord::Base
  validates :first_name, presence: true;
  validates :last_name, presence: true;

  has_many :stats

  def full_name
    first_name + " " + last_name
  end

  def total_yards
    total = 0
    stats.each do |stat|
      total += stat.yards.to_i
    end
    total
  end

  def total_tds
    total = 0
    stats.each do |stat|
      if stat.touchdown == true
        total += 1
      end
    end
    total
  end

  def total_pass_yards
    total = 0
    stats.each do |stat|
      if stat.play_type == "pass"
        total += stat.yards.to_i
      end
    end
    total
  end

  def total_pass_tds
    total = 0
    stats.each do |stat|
      if stat.play_type == "pass" && stat.touchdown == true
        total += 1
      end
    end
    total
  end

  def total_interceptions
    total = 0
    stats.each do |stat|
      if stat.play_type == "pass" && stat.intercepted == true
        total += 1
      end
    end
    total
  end

  def completions
    total = 0
    stats.each do |stat|
      if stat.play_type == "pass" && stat.complete == true
        total += 1
      end
    end
    total
  end

  def attempts
    total = 0
    stats.each do |stat|
      if stat.play_type == "pass"
        total += 1
      end
    end
    total
  end

  def total_rec_yards
    total = 0
    stats.each do |stat|
      if stat.play_type == "rec"
        total += stat.yards.to_i
      end
    end
    total
  end

  def total_rec_tds
    total = 0
    stats.each do |stat|
      if stat.play_type == "rec" && stat.touchdown == true
        total += 1
      end
    end
    total
  end

  def receptions
    total = 0
    stats.each do |stat|
      if stat.play_type == "rec"
        total += 1
      end
    end
    total
  end

  def total_rush_yards
    total = 0
    stats.each do |stat|
      if stat.play_type == "rush"
        total += stat.yards.to_i
      end
    end
    total
  end

  def rushing_attempts
    total = 0
    stats.each do |stat|
      if stat.play_type == "rush"
        total += 1
      end
    end
    total
  end

  def total_rush_tds
    total = 0
    stats.each do |stat|
      if stat.play_type == "rush" && stat.touchdown == true
        total += 1
      end
    end
    total
  end

end
