class PlayersController < ApplicationController

  def index
    @player = Player.all
  end
end
