require 'rails_helper'

RSpec.describe Player, type: :model do
  it { should have_valid(:first_name).when('Tom') }
  it { should have_valid(:last_name).when('Brady') }
  it { should have_valid(:height).when('6-4') }
  it { should have_valid(:weight).when('225') }
  it { should have_valid(:years_pro).when('17th') }
  it { should have_valid(:college).when('Michigan') }
  it { should have_valid(:current_team).when('New England Patriots') }
  it { should have_valid(:position).when('QB', 'WR', 'RB') }
  it { should have_valid(:number).when('12') }
end

describe "Player's Season Passing Total: " do
  let!(:brady) { FactoryGirl.create(:player) }
  let!(:stat1) { FactoryGirl.create(:stat, player: brady) }
  let!(:stat2) { FactoryGirl.create(:stat, player: brady) }
  let!(:stat3) { FactoryGirl.create(:stat, complete: false, yards: "0", intercepted: true, touchdown: false, player: brady) }

  it "Brady's total passing tds is equal to 2" do
    expect(brady.total_pass_tds).to eq(2)
  end

  it "Brady's total passing interceptions is equal to 1" do
    expect(brady.total_interceptions).to eq(1)
  end

  it "Brady's total passing yards is equal to 30" do
    expect(brady.total_pass_yards).to eq(30)
  end

  it "Brady's total passing completions is equal to 2" do
    expect(brady.completions).to eq(2)
  end

  it "Brady's total passing attempts is equal to 3" do
    expect(brady.attempts).to eq(3)
  end
end

describe "Player's Season Rushing Total: " do
  let!(:brady) { FactoryGirl.create(:player) }
  let!(:stat1) { FactoryGirl.create(:stat, play_type: "rush", complete: false, yards: "10", intercepted: false, touchdown: false, player: brady) }
  let!(:stat2) { FactoryGirl.create(:stat, play_type: "rush", complete: false, yards: "-4", intercepted: false, touchdown: false, player: brady) }
  let!(:stat3) { FactoryGirl.create(:stat, play_type: "rush", complete: false, yards: "1", intercepted: false, touchdown: true, player: brady) }

  it "Brady's total rushing tds is equal to 1" do
    expect(brady.total_rush_tds).to eq(1)
  end

  it "Brady's total rushing yards is equal to 7" do
    expect(brady.total_rush_yards).to eq(7)
  end

  it "Brady's total rushing attempts is equal to 3" do
    expect(brady.rushing_attempts).to eq(3)
  end
end

describe "Player's Season Receiving Total: " do
  let!(:brady) { FactoryGirl.create(:player) }
  let!(:stat1) { FactoryGirl.create(:stat, play_type: "rec", complete: false, yards: "25", intercepted: false, touchdown: false, player: brady) }

  it "Brady's total receiving tds is equal to 0" do
    expect(brady.total_rec_tds).to eq(0)
  end

  it "Brady's total receiving yards is equal to 25" do
    expect(brady.total_rec_yards).to eq(25)
  end

  it "Brady's total receptions is equal to 1" do
    expect(brady.receptions).to eq(1)
  end
end

describe "Player's Season Total: " do
  let!(:brady) { FactoryGirl.create(:player) }
  let!(:stat1) { FactoryGirl.create(:stat, player: brady) }
  let!(:stat2) { FactoryGirl.create(:stat, player: brady) }
  let!(:stat3) { FactoryGirl.create(:stat, complete: false, yards: "0", intercepted: true, touchdown: false, player: brady) }
  let!(:stat4) { FactoryGirl.create(:stat, play_type: "rush", complete: false, yards: "10", intercepted: false, touchdown: false, player: brady) }
  let!(:stat5) { FactoryGirl.create(:stat, play_type: "rush", complete: false, yards: "-4", intercepted: false, touchdown: false, player: brady) }
  let!(:stat6) { FactoryGirl.create(:stat, play_type: "rush", complete: false, yards: "1", intercepted: false, touchdown: true, player: brady) }
  let!(:stat7) { FactoryGirl.create(:stat, play_type: "rec", complete: false, yards: "25", intercepted: false, touchdown: false, player: brady) }

  it "Brady's total tds is equal to 3" do
    expect(brady.total_tds).to eq(3)
  end

  it "Brady's total yards is equal to 62" do
    expect(brady.total_yards).to eq(62)
  end
end
