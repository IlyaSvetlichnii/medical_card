class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token
  before_action :current_user

  def current_user
    if session[:user_id]
      @current_user ||= Patient.find(session[:user_id])
    else
      @current_user = nil
    end
  end
end
