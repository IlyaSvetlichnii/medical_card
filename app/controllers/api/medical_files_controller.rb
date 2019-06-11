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

  def write
    # {"lat"=>"37.4219983", "lon"=>"-122.084", "number"=>"5", "dir"=>"1", "controller"=>"medical_datums", "action"=>"write"}
    patient = Patient.first
    #patient.medical_datums.create(data_type: params['type'], basic_data: params)
    @current_user.medical_datums.create(data_type: params['type'], basic_data: params)
    render status: 200, json: {
      message: "Данные успешно добавлены"
    }.to_json
  end

  private

  def file_params
    params.permit(:file, :title)
  end
end