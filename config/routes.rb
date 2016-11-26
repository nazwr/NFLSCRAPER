Rails.application.routes.draw do
  resources :players, only: [:index]
  root "players#index"

  namespace :api do
    namespace :v1 do
      resources :players, only: [:index, :create, :destroy, :update]
      resources :stats, only: [:index, :create, :destroy, :update]
    end
  end
end
