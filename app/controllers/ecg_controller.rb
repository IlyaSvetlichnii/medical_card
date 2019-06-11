class EcgController < ApplicationController
  def index
    @ecg_readings = EcgReading.all
  end

  def show
    @ecg_reading = EcgReading.find(params[:id])
  end
end