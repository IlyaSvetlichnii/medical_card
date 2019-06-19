class MedicalFilesController < ApplicationController
  before_action :current_doctor

  def index
    @files = HeartRate.all
  end

  def show
    @file = HeartRate.find(params[:id])
  end

  def create
    file = @current_user.heart_rates

    if file.create(file_params)
      redirect_to medical_files_path
    else
      render :new
    end
  end

  def download
    file = HeartRate.find(params[:id])
    send_file(file.file.path)
  end

  def file_params
    params.require(:medical_file).permit(:file)
  end
end
