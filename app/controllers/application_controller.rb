class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token
  before_action :current_user

  def current_user
    if session[:patient_id]
      @current_user ||= Patient.find(session[:patient_id])
    elsif session[:doctor_id]
      @current_user ||= Doctor.find(session[:doctor_id])
    else
      # @current_user ||= Patient.find(session[:patient_id])
      @current_user = nil
    end
  end

  # def current_doctor
  #   if session[:doctor_id]

  #   else
  #     @current_user = nil
  #   end
  # end

  def _patient
    if @current_user.class == Doctor
      @current_user.patients.find(params[:patient])
    else
      @current_user
    end
  end
end
