Rails.application.routes.draw do
  root "players#index"

  resources :players, only: [:index, :edit, :update]
  resources :games, only: [:index]

  namespace :api do
    namespace :v1 do
      resources :players, only: [:index, :create, :destroy, :update, :edit]
      resources :stats, only: [:index, :create, :destroy, :update]
      resources :names, only: [:index, :create, :destroy, :update]
      resources :games, only: [:index]
    end
  end
end
