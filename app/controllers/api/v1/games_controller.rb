class Api::V1::GamesController < ApiController
  def index
    @weeks = Game.all.pluck(:week).uniq
    @games = Game.where(week: params["week"])
    @stats = Stat.where(gamecode: params["gamecode"])
    @players = Player.all

    render json: {
    weeks: @weeks,
    allGames: @games,
    allStats: @stats,
    allPlayers: @players
    }, status: :ok
  end

end
