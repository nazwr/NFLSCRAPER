require 'rails_helper'

RSpec.describe Stat, type: :model do
  it { should have_valid(:play_type).when('pass', 'rec', 'rush') }
  it { should_not have_valid(:play_type).when(nil, '') }

  it { should have_valid(:direction).when('left', 'middle', 'right') }
  it { should_not have_valid(:direction).when(nil, '') }

  it { should have_valid(:gamecode).when('20160908007', '20161226006') }
  it { should_not have_valid(:gamecode).when(nil, '') }

  it { should_not have_valid(:complete).when(nil, '') }

  it { should_not have_valid(:touchdown).when(nil, '') }

  it { should_not have_valid(:intercepted).when(nil, '') }
end

describe "Player's Game Total: " do
  let!(:brady) { FactoryGirl.create(:player) }
  let!(:game) { FactoryGirl.create(:game, home: "New England", away: "New York Jets", week: "12", gamecode: "20161127020") }
  let!(:stat1) { FactoryGirl.create(:stat, player: brady) }
  let!(:stat2) { FactoryGirl.create(:stat, player: brady) }
  let!(:stat3) { FactoryGirl.create(:stat, complete: false, yards: "0", intercepted: true, touchdown: false, player: brady) }
  let!(:stat4) { FactoryGirl.create(:stat, play_type: "rush", complete: false, yards: "10", intercepted: false, touchdown: false, player: brady) }
  let!(:stat5) { FactoryGirl.create(:stat, play_type: "rush", complete: false, yards: "-4", intercepted: false, touchdown: false, player: brady) }
  let!(:stat6) { FactoryGirl.create(:stat, play_type: "rush", complete: false, yards: "1", intercepted: false, touchdown: true, player: brady) }
  let!(:stat7) { FactoryGirl.create(:stat, play_type: "rec", complete: false, yards: "25", intercepted: false, touchdown: false, player: brady) }

  it "Brady's game total passing tds is equal to 2" do
    expect(Stat.new.total_pass_tds(brady.first_name, brady.last_name, game.gamecode)).to eq(2)
  end

  it "Brady's game total passing interceptions is equal to 1" do
    expect(Stat.new.total_interceptions(brady.first_name, brady.last_name, game.gamecode)).to eq(1)
  end

  it "Brady's game total passing yards is equal to 30" do
    expect(Stat.new.total_pass_yards(brady.first_name, brady.last_name, game.gamecode)).to eq(30)
  end

  it "Brady's game total passing completions is equal to 2" do
    expect(Stat.new.completions(brady.first_name, brady.last_name, game.gamecode)).to eq(2)
  end

  it "Brady's game total passing attempts is equal to 3" do
    expect(Stat.new.attempts(brady.first_name, brady.last_name, game.gamecode)).to eq(3)
  end

  it "Brady's game total rushing tds is equal to 1" do
    expect(Stat.new.total_rush_tds(brady.first_name, brady.last_name, game.gamecode)).to eq(1)
  end

  it "Brady's game total rushing yards is equal to 7" do
    expect(Stat.new.total_rush_yards(brady.first_name, brady.last_name, game.gamecode)).to eq(7)
  end

  it "Brady's game total rushing attempts is equal to 3" do
    expect(Stat.new.rushing_attempts(brady.first_name, brady.last_name, game.gamecode)).to eq(3)
  end

  it "Brady's game total receiving tds is equal to 0" do
    expect(Stat.new.total_rec_tds(brady.first_name, brady.last_name, game.gamecode)).to eq(0)
  end

  it "Brady's game total receiving yards is equal to 25" do
    expect(Stat.new.total_rec_yards(brady.first_name, brady.last_name, game.gamecode)).to eq(25)
  end

  it "Brady's game total receptions is equal to 1" do
    expect(Stat.new.receptions(brady.first_name, brady.last_name, game.gamecode)).to eq(1)
  end

  it "Brady's game total tds is equal to 3" do
    expect(Stat.new.total_tds(brady.first_name, brady.last_name, game.gamecode)).to eq(3)
  end

  it "Brady's game total yards is equal to 62" do
    expect(Stat.new.total_yards(brady.first_name, brady.last_name, game.gamecode)).to eq(62)
  end
end
