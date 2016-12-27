# require 'rails_helper'
#
# RSpec.describe Player, type: :model do
#   it { should have_valid(:first_name).when('Tom', 'Carson') }
#   it { should_not have_valid(:first_name).when(nil, '') }
#
#   it { should have_valid(:last_name).when('Brady', 'Wentz') }
#   it { should_not have_valid(:last_name).when(nil, '') }
#
#   it { should have_valid(:height).when('6-1', '6-2') }
#   it { should_not have_valid(:height).when(nil, '') }
#
#   it { should have_valid(:weight).when('225', '178') }
#   it { should_not have_valid(:weight).when(nil, '') }
#
#   it { should have_valid(:years_pro).when('Rookie', '4th') }
#   it { should_not have_valid(:born).when(nil, '') }
#
#   it { should have_valid(:college).when('Penn State') }
#   it { should_not have_valid(:college).when(nil, '') }
#
#   it { should have_valid(:current_team).when('Philadelphia Eagles') }
#   it { should_not have_valid(:current_team).when(nil, '') }
#
#   it { should have_valid(:position).when('QB', 'WR', 'RB') }
#   it { should_not have_valid(:position).when(nil, '') }
#
#   it { should have_valid(:number).when('12', '10') }
#   it { should_not have_valid(:number).when(nil, '') }
# end
