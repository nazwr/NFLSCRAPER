class Stat < ActiveRecord::Base
  validates :play_type, presence: true
  validates :player, presence: true
  
  belongs_to :player

  def plain_text
    "#{player.full_name} #{play_type}es to the #{direction} for #{yards} yards"
  end

  def total_yards(first_name, last_name, gamecode)
    @player = Player.find_by(last_name: last_name, first_name: first_name)
    stats = @player.stats.where(gamecode: gamecode)
    total = 0
    stats.each do |stat|
      total += stat.yards.to_i
    end
    total
  end

  def total_tds(first_name, last_name, gamecode)
    @player = Player.find_by(last_name: last_name, first_name: first_name)
    stats = @player.stats.where(gamecode: gamecode)
    total = 0
    stats.each do |stat|
      if stat.touchdown == true
        total += 1
      end
    end
    total
  end

  def total_pass_yards(first_name, last_name, gamecode)
    @player = Player.find_by(last_name: last_name, first_name: first_name)
    stats = @player.stats.where(gamecode: gamecode)
    total = 0
    stats.each do |stat|
      if stat.play_type == "pass"
        total += stat.yards.to_i
      end
    end
    total
  end

  def total_pass_tds(first_name, last_name, gamecode)
    @player = Player.find_by(last_name: last_name, first_name: first_name)
    stats = @player.stats.where(gamecode: gamecode)
    total = 0
    stats.each do |stat|
      if stat.play_type == "pass" && stat.touchdown == true
        total += 1
      end
    end
    total
  end

  def total_interceptions(first_name, last_name, gamecode)
    @player = Player.find_by(last_name: last_name, first_name: first_name)
    stats = @player.stats.where(gamecode: gamecode)
    total = 0
    stats.each do |stat|
      if stat.play_type == "pass" && stat.intercepted == true
        total += 1
      end
    end
    total
  end

  def completions(first_name, last_name, gamecode)
    @player = Player.find_by(last_name: last_name, first_name: first_name)
    stats = @player.stats.where(gamecode: gamecode)
    total = 0
    stats.each do |stat|
      if stat.play_type == "pass" && stat.complete == true
        total += 1
      end
    end
    total
  end

  def attempts(first_name, last_name, gamecode)
    @player = Player.find_by(last_name: last_name, first_name: first_name)
    stats = @player.stats.where(gamecode: gamecode)
    total = 0
    stats.each do |stat|
      if stat.play_type == "pass"
        total += 1
      end
    end
    total
  end

  def total_rec_yards(first_name, last_name, gamecode)
    @player = Player.find_by(last_name: last_name, first_name: first_name)
    stats = @player.stats.where(gamecode: gamecode)
    total = 0
    stats.each do |stat|
      if stat.play_type == "rec"
        total += stat.yards.to_i
      end
    end
    total
  end

  def total_rec_tds(first_name, last_name, gamecode)
    @player = Player.find_by(last_name: last_name, first_name: first_name)
    stats = @player.stats.where(gamecode: gamecode)
    total = 0
    stats.each do |stat|
      if stat.play_type == "rec" && stat.touchdown == true
        total += 1
      end
    end
    total
  end

  def receptions(first_name, last_name, gamecode)
    @player = Player.find_by(last_name: last_name, first_name: first_name)
    stats = @player.stats.where(gamecode: gamecode)
    total = 0
    stats.each do |stat|
      if stat.play_type == "rec"
        total += 1
      end
    end
    total
  end

  def total_rush_yards(first_name, last_name, gamecode)
    @player = Player.find_by(last_name: last_name, first_name: first_name)
    stats = @player.stats.where(gamecode: gamecode)
    total = 0
    stats.each do |stat|
      if stat.play_type == "rush"
        total += stat.yards.to_i
      end
    end
    total
  end

  def rushing_attempts(first_name, last_name, gamecode)
    @player = Player.find_by(last_name: last_name, first_name: first_name)
    stats = @player.stats.where(gamecode: gamecode)
    total = 0
    stats.each do |stat|
      if stat.play_type == "rush"
        total += 1
      end
    end
    total
  end

  def total_rush_tds(first_name, last_name, gamecode)
    @player = Player.find_by(last_name: last_name, first_name: first_name)
    stats = @player.stats.where(gamecode: gamecode)
    total = 0
    stats.each do |stat|
      if stat.play_type == "rush" && stat.touchdown == true
        total += 1
      end
    end
    total
  end


end
