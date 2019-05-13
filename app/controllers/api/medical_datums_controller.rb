class Api::MedicalDatumsController < Api::BaseController
   #before_action :find_patient, only: %i[info]
  #skip_before_action :authorize_request
  def write
    # byebug
    # {"lat"=>"37.4219983", "lon"=>"-122.084", "number"=>"5", "dir"=>"1", "controller"=>"medical_datums", "action"=>"write"}
    patient = Patient.first
    #patient.medical_datums.create(data_type: params['type'], basic_data: params)
    @current_user.medical_datums.create(data_type: params['type'], basic_data: params)
    render status: 200, json: {
      message: "Данные успешно добавлены"
    }.to_json
  end
end