class PostsController < ApplicationController

  def index
    @patient = Patient.first
  end

  def show
    @m_d = MedicalDatum.find(params[:id])
    @patient = @m_d.patient
    @type = 'ecg'
  end

  def write
    # {"lat"=>"37.4219983", "lon"=>"-122.084", "number"=>"5", "dir"=>"1", "controller"=>"medical_datums", "action"=>"write"}
    patient = Patient.first
    # med_data = patient.medical_datums.create(data_type: params['type'], basic_data: params)
    render json: {}
  end
end
