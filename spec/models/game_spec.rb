require 'rails_helper'

RSpec.describe Game, type: :model do
  it { should have_valid(:home).when('Philadelphia', 'New England') }
  it { should_not have_valid(:home).when(nil, '') }

  it { should have_valid(:away).when('Chicago', 'Los Angles') }
  it { should_not have_valid(:away).when(nil, '') }

  it { should have_valid(:week).when('1', '16') }
  it { should_not have_valid(:week).when(nil, '') }

  it { should have_valid(:gamecode).when('20160908007', '20161226006') }
  it { should_not have_valid(:gamecode).when(nil, '') }
end
