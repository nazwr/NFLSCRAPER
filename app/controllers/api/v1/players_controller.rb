class Api::V1::PlayersController < ApiController
  def index
    @player = Project.find(params[:player])
    binding.pry
    render json: {
      player: @player
    }, status: :ok
  end
end
