Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  devise_for :users
  root to: 'doctors#index'

  get  'login',  to: 'sessions#new'
  get  'logout', to: 'sessions#destroy'
  post 'login',  to: 'sessions#create'

  post 'patient', to: 'patients#create'
  get  'profile', to: 'patients#profile'

  resources :doctors, only: [:index, :show]
  resources :pulses, only: [:index, :show]
  resources :ecg, only: [:index, :show]
  resources :medical_files

  get 'download_file', to: "medical_files#download"

  namespace 'api' do
    # post 'signup', to: 'users#create'
    post 'login', to: 'authentication#login'
    # post 'logout', to: 'sessions#destroy'

    get 'patient/info', to: 'patients#info'
    post 'medical_file', to: 'medical_files#create'

    post 'save_pulse', to: 'pulse#create'
  end
end
