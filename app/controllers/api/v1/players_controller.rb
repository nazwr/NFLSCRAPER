class Api::V1::PlayersController < ApiController
  def index
    @player = Player.find_by(last_name: params[:player][:last_name], first_name: params[:player][:first_name])
    @allstats = @player.stats
    @games = @allstats.pluck(:gamecode).uniq
    @total = Hash.new
    @total["total_yards"] = @player.total_yards
    @total["total_tds"] = @player.total_tds
    @total["total_pass_yards"] = @player.total_pass_yards
    @total["total_pass_tds"] = @player.total_pass_tds
    @total["interceptions"] = @player.total_interceptions
    @total["completions"] = @player.completions
    @total["attempts"] = @player.attempts
    @total["completion_rate"] = (@player.completions.to_f / @player.attempts.to_f) * 100.0
    @total["total_rush_attempts"] = @player.rushing_attempts
    @total["total_rush_yards"] = @player.total_rush_yards
    @total["total_rush_tds"] = @player.total_rush_tds
    @total["receptions"] = @player.receptions
    @total["total_rec_yards"] = @player.total_rec_yards
    @total["total_rec_tds"] = @player.total_rec_tds
    render json: {
      stats: @allstats,
      games: @games,
      total_season_stats: @total
    }, status: :ok
  end
end
