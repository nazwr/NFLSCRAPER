RSpec.configure do |config|
  config.before(:each) do
    DatabaseCleaner.clean_with(:truncation)
  end

  config.before(:each) do
    # DatabaseCleaner.strategy = :transaction
    DatabaseCleaner.strategy = :truncation
  end

  config.before(:each, js: true) do
    DatabaseCleaner.strategy = :truncation
  end

  config.before(:each) do
    DatabaseCleaner.start
  end

  config.after(:each) do
    DatabaseCleaner.clean
  end

  config.after(:each) do
  end
end
