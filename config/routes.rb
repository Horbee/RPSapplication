Rails.application.routes.draw do
  root 'simple_pages#index'
  # post action: :create, controller: 'simple_pages'
  resource :highscores
end
