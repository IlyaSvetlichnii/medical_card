class MedicalFilesController < ApplicationController
  # before_action :current_doctor

  def index
    @files = _patient.heart_rates.where.not(file: nil)
  end

  def show
    @file = HeartRate.find(params[:id])

    if @file.file.content_type == "application/pdf"
      send_file(@file.file.path)
    end
  end

  def create
    if _patient.heart_rates.create(file_params)
      redirect_to medical_files_path(patient: _patient.id)
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
