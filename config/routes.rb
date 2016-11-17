Rails.application.routes.draw do
  resources :players, only: [:index]
  root "players#index"
end
