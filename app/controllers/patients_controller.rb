class PatientsController < ApplicationController
  # skip_before_action :current_user, only: [:show]
  # before_action :current_doctor, only: [:show]
  def new; end

  def profile
    @patient = Patient.first
    @my_doctor = @patient.doctor
  end

  def show
    @patient = Patient.find(params[:id])
  end

  def create
    @user = @current_user.patients.new(patient_params)

    if @user.save
      redirect_to my_patients_path
    else
      render :new
    end
  end

  def update
    @patient = Patient.find(params[:id])
    @patient.update(patient_params)
    redirect_to my_patient_path(id: @patient.id)
  end

  def patient_params
    params.permit(:id, :last_name, :name, :patronymic, :email, :dob, :address, :phone_number, :blood_type, :allergy, :password)
  end
end
