# require 'rails_helper'
#
# RSpec.describe Question, type: :model do
#   it { should have_valid(:content).when('This is a new question.', 'This is an another question.') }
#   it { should_not have_valid(:content).when(nil, '') }
# end
#
# describe "#questionnaire" do
#   it "question belongs to questionnaire1" do
#     questionnaire1 = FactoryGirl.create(:questionnaire)
#     questionnaire2 = FactoryGirl.create(:questionnaire)
#     question = FactoryGirl.create(:question, questionnaire_id: questionnaire1.id, reverse: true)
#     expect(question.questionnaire_id).to eq(questionnaire1.id)
#     expect(question.questionnaire_id).not_to eq(questionnaire2.id)
#   end
# end
#
# describe "#reverse" do
#   it "question is reversed" do
#     questionnaire1 = FactoryGirl.create(:questionnaire)
#     question = FactoryGirl.create(:question, questionnaire_id: questionnaire1.id, reverse: true)
#     expect(question.reverse).to eq(true)
#   end
#
#   it "question is not reversed" do
#     questionnaire1 = FactoryGirl.create(:questionnaire)
#     question = FactoryGirl.create(:question, questionnaire_id: questionnaire1.id, reverse: false)
#     expect(question.reverse).to eq(false)
#   end
# end
