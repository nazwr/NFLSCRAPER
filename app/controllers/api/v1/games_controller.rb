class Api::V1::GamesController < ApiController
  def index
    @weeks = Game.all.pluck(:week).uniq
    @games = Game.where(week: params["week"])
    @stats = Stat.where(gamecode: params["gamecode"])
    @players = @stats.all.pluck(:player_id).uniq

    playerstats = []
    @players.each do |player|
      a = Player.find_by(id: player)
      @gametotal = Hash.new
      @gametotal["name"] = a.full_name
      @gametotal["passing_yards"] = Stat.new.total_pass_yards(a.first_name,a.last_name,params[:gamecode])
      @gametotal["passing_tds"] = Stat.new.total_pass_tds(a.first_name,a.last_name,params[:gamecode])
      @gametotal["interceptions"] = Stat.new.total_interceptions(a.first_name,a.last_name,params[:gamecode])
      @gametotal["completions"] = Stat.new.completions(a.first_name,a.last_name,params[:gamecode])
      @gametotal["attempts"] = Stat.new.attempts(a.first_name,a.last_name,params[:gamecode])
      @gametotal["rushing_attempts"] = Stat.new.rushing_attempts(a.first_name,a.last_name,params[:gamecode])
      @gametotal["rushing_yards"] = Stat.new.total_rush_yards(a.first_name,a.last_name,params[:gamecode])
      @gametotal["rushing_tds"] = Stat.new.total_rush_tds(a.first_name,a.last_name,params[:gamecode])
      @gametotal["receptions"] = Stat.new.receptions(a.first_name,a.last_name,params[:gamecode])
      @gametotal["receiving_yards"] = Stat.new.total_rec_yards(a.first_name,a.last_name,params[:gamecode])
      @gametotal["receiving_tds"] = Stat.new.total_rec_tds(a.first_name,a.last_name,params[:gamecode])
      playerstats << @gametotal
    end

    render json: {
    weeks: @weeks,
    allGames: @games,
    allStats: playerstats,
    }, status: :ok
  end

end
