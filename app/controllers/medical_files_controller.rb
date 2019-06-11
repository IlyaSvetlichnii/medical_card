class MedicalFilesController < ApplicationController

  def index
    @files = MedicalFile.all
  end

  def new
    @user = User.new
  end

  def show
    @file = MedicalFile.find(params[:id])
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
    file = MedicalFile.find(params[:id])
  #  binding.pry
    send_file(file.file.path)
  end

  def file_params
    params.require(:medical_file).permit(:title, :file)
  end
end
