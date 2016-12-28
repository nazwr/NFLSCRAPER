class Api::V1::StatsController < ApiController
  def index
    @gametotal = Hash.new
    @gametotal["game_total_yards"] = Stat.new.total_yards(params[:first_name],params[:last_name],params[:gamecode])
    @gametotal["game_total_tds"] = Stat.new.total_tds(params[:first_name],params[:last_name],params[:gamecode])
    @gametotal["game_total_pass_yards"] = Stat.new.total_pass_yards(params[:first_name],params[:last_name],params[:gamecode])
    @gametotal["game_total_pass_tds"] = Stat.new.total_pass_tds(params[:first_name],params[:last_name],params[:gamecode])
    @gametotal["game_interceptions"] = Stat.new.total_interceptions(params[:first_name],params[:last_name],params[:gamecode])
    @gametotal["game_completions"] = Stat.new.completions(params[:first_name],params[:last_name],params[:gamecode])
    @gametotal["game_attempts"] = Stat.new.attempts(params[:first_name],params[:last_name],params[:gamecode])
    @gametotal["game_completion_rate"] = ((Stat.new.completions(params[:first_name],params[:last_name],params[:gamecode]).to_f / Stat.new.attempts(params[:first_name],params[:last_name],params[:gamecode]).to_f) * 100.0).round(2)
    @gametotal["game_total_rush_attempts"] = Stat.new.rushing_attempts(params[:first_name],params[:last_name],params[:gamecode])
    @gametotal["game_total_rush_yards"] = Stat.new.total_rush_yards(params[:first_name],params[:last_name],params[:gamecode])
    @gametotal["game_total_rush_tds"] = Stat.new.total_rush_tds(params[:first_name],params[:last_name],params[:gamecode])
    @gametotal["game_receptions"] = Stat.new.receptions(params[:first_name],params[:last_name],params[:gamecode])
    @gametotal["game_total_rec_yards"] = Stat.new.total_rec_yards(params[:first_name],params[:last_name],params[:gamecode])
    @gametotal["game_total_rec_tds"] = Stat.new.total_rec_tds(params[:first_name],params[:last_name],params[:gamecode])
    if @gametotal["game_completion_rate"].nan?
      @gametotal["game_completion_rate"] = 0
    end
    render json: {
      gametotal: @gametotal,
    }, status: :ok
  end
end
