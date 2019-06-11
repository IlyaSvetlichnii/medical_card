class DoctorsController < ApplicationController

  def index
    @doctors = Doctor.all
  end

  def new_patient
    @user = User.new
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
