class Api::V1::PlayersController < ApiController
  def index
    @player = Player.find_by(last_name: params[:player][:last_name], first_name: params[:player][:first_name])
    @player = @player.stats
    render json: {
      player: @player
    }, status: :ok
  end
end
