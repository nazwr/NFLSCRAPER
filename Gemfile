source 'https://rubygems.org/'

ruby '2.3.1'

gem 'rails'
gem 'pg', '~> 0.15'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'jquery-rails'
gem 'listen'
gem 'omniauth-facebook'
gem 'dotenv-rails'
gem 'redis'

group :development, :test do
  gem 'capybara'
  gem 'factory_girl_rails'
  gem 'rspec-rails', '~> 3.0'
  gem 'pry-rails'
  gem 'shoulda'
  gem 'valid_attribute'
end

group :test do
  gem 'launchy', require: false
  gem 'database_cleaner'
end

group :production do
  gem 'rails_12factor'
  gem 'puma'
end
