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
