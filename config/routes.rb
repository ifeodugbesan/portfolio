Rails.application.routes.draw do
  root to: 'pages#home'
  post 'switch_mode', to: 'pages#switch_mode'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
