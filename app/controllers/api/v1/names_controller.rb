class Api::V1::NamesController < ApiController
  def index
    unless params[:first_name].nil?
      @firstnames = Player.where("first_name like ?", params[:first_name] + "%")
      @first = @firstnames.pluck(:first_name).uniq
    end

    unless params[:last_name].nil?
      @lastnames = Player.where("last_name like ?", params[:last_name] + "%")
      @last = @lastnames.pluck(:last_name).uniq
    end

    render json: {
    matchingfirst: @first,
    matchinglast: @last
    }, status: :ok
  end

end
