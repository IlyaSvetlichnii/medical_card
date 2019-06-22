Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  devise_for :users
  root to: 'doctors#index'

  get     'login',  to: 'sessions#new'
  delete  'logout', to: 'sessions#destroy'
  post    'login',  to: 'sessions#create'

  post 'patient', to: 'patients#create'
  get 'new_patient', to: 'patients#new'
  get  'profile', to: 'patients#profile'

  get  'my_patients', to: 'doctors#my_patients'
  get  'my_patient',  to: 'patients#show'
  post  'update_patient',  to: 'patients#update'
  post  'update_comment',  to: 'heart_rates#update_comment'
  post  'pulse_comment',  to: 'pulses#comment'

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
    post 'ecg', to: 'ecg#create'
  end
end
