class Api::V1::PlayersController < ApiController
  def index
    @player = Player.find_by(last_name: params[:player][:last_name], first_name: params[:player][:first_name])
    @allstats = @player.stats
    @games = @allstats.pluck(:gamecode).uniq
    render json: {
      stats: @allstats,
      games: @games
    }, status: :ok
  end
end
