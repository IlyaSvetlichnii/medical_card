Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  devise_for :users
  root to: 'user#index'

  get '/login', to: 'sessions#new'
  post '/login', to: 'sessions#create'
  get '/logout', to: 'sessions#destroy'

  get '/doctors', to: 'doctors#index'

  post 'patient', to: 'patients#create'

  resources :posts
  post 'write', to: 'medical_datums#write'
  # get 'medical_data', to: 'medical_datums#index'
  resources :medical_datums

  get 'download_dicom', to: "posts#download_dicom"

  namespace 'api' do
    # post 'signup', to: 'users#create'
    post 'login', to: 'authentication#login'

    get 'patient/info', to: 'patients#info'
    post 'medical_datums/write', to: 'medical_datums#write'
    # post 'logout', to: 'sessions#destroy'
  end
end
