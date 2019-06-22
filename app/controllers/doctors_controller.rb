class DoctorsController < ApplicationController
  # skip_before_action :current_user
  # before_action :current_doctor

  def index
    @doctors = Doctor.all
  end

  def new_patient
    @user = Patient.new
  end

  def my_patients
    @patients = @current_user.patients
  end

  def create
    @user = User.new(user_params)

    if @user.save
      session[:user_id] = @user.id # to automatically login a user that signed up
      flash[:notice] = "You are registered."
      redirect_to root_path
    else
      render :new
    end
  end

  def user_params
    params.require(:user).permit(:login, :password)
  end
end
