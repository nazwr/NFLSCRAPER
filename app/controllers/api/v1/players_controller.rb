class Api::V1::PlayersController < ApiController
  def index
    @players = Player.all
    render json: {
      players: @players
    }, status: :ok
  end
end
