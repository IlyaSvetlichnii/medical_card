class SessionsController < ApplicationController
  def create
    user = Patient.where(phone_number: params[:phone_number]).first || Doctor.where(phone_number: params[:phone_number]).first

    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to root_url
    else
      redirect_to root_url
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_url
  end
end