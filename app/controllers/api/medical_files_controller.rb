class Api::MedicalFilesController < Api::BaseController
   #before_action :find_patient, only: %i[info]
  skip_before_action :authorize_request

  def create
    @patient = Patient.first
    if @patient.heart_rates.create(file_params)
      render status: 200, json: {
        message: "Фаил успешно сохранен"
      }.to_json
    else
      render json: { error: 'Фаил не был сохранен' }, status: :unauthorized
    end
  end

  private

  def file_params
    params.permit(:file, :title)
  end
end