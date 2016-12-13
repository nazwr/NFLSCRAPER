class Api::V1::GamesController < ApiController
  def index
    @games = Stat.all.pluck(:gamecode).uniq
    binding.pry

    render json: {
    allgames: @games,
    }, status: :ok
  end

end
