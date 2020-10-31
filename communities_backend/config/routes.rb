Rails.application.routes.draw do

  root to: "application#cookie"
  resources :session
  
  namespace :api do
    namespace :v1 do 
      resources :users
      resources :communities
      resources :posts
    end
  end
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
