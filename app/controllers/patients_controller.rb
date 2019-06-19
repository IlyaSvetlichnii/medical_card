class PatientsController < ApplicationController
  skip_before_action :current_user, only: [:show]
  before_action :current_doctor, only: [:show]
  def new
    @user = User.new
  end

  def profile
    @patient = Patient.first
    @my_doctor = @patient.doctor
  end

  def show
    @patient = Patient.find(params[:id])
  end

  def create
    @user = User.new(user_params)

    if @user.save
      session[:user_id] = @user.id
      redirect_to root_path
    else
      render :new
    end
  end

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
