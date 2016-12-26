class Api::V1::GamesController < ApiController
  def index
    @weeks = Game.all.pluck(:week).uniq
    @games = Game.where(week: params["week"])
    @stats = Stat.where(gamecode: params["gamecode"])
    @game = Game.where(gamecode: params["gamecode"])
    @players = @stats.all.pluck(:player_id).uniq
    homestats = []
    awaystats = []
    @players.each do |player|
      a = Player.find_by(id: player)
      @gametotal = Hash.new
      @gametotal["name"] = a.full_name
      @gametotal["team"] = a.current_team
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
      if a.current_team == nil
        next
      end
      player_team = a.current_team.split(" ")
      player_team.pop
      if @game[0].home == player_team.join(" ")
        homestats << @gametotal
      else @game[0].away == player_team.join(" ")
        awaystats << @gametotal
      end
    end

    render json: {
    weeks: @weeks,
    allGames: @games,
    homeStats: homestats,
    awayStats: awaystats,
    game: @game
    }, status: :ok
  end

end
