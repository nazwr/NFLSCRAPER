class PlayersController < ApplicationController

  def index
    @player = Player.all
  end

  def edit
    @player = Player.find(params[:id])
  end

  def update
    @player = Player.find(params[:player][:player_id])
    @player.image = params[:player][:image]
    @player.save
  end
end
