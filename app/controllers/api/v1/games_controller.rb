class Api::V1::GamesController < ApiController
  def index
    @games = Stat.all.pluck(:gamecode).uniq
    @weeks = (13).to_a

    render json: {
    allgames: @games,
    weeks: @weeks
    }, status: :ok
  end

end
