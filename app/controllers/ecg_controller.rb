class EcgController < ApplicationController
  before_action :current_doctor

  def index
    @ecg_readings = HeartRate.all
  end

  def show
    @ecg_reading = HeartRate.find(params[:id])
    @ecg_value = @ecg_reading.value.map {|value| value.to_i}
    # @ecg_value = @ecg_reading.file
  end
end