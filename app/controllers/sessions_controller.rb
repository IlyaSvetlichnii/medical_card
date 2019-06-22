class SessionsController < ApplicationController
  def create
    user = Patient.where(phone_number: params[:phone_number]).first || Doctor.where(phone_number: params[:phone_number]).first

    if user && user.authenticate(params[:password])
      _new_session(user)
    else
      redirect_to root_url
    end
  end

  def destroy
    session[:patient_id] = nil
    session[:doctor_id] = nil
    redirect_to root_url
  end

  private

  def _new_session(user)
    if user.class == Doctor
      session[:doctor_id] = user.id
      redirect_to my_patients_url
    else
      session[:patient_id] = user.id
      redirect_to root_url
    end
  end
end