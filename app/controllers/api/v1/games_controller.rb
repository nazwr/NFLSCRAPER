class Api::V1::GamesController < ApiController
  def index
    @weeks = Game.all.pluck(:week).uniq
    render json: {
    weeks: @weeks
    }, status: :ok
  end

end
