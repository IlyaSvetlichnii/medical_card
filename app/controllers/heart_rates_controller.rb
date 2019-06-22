class HeartRatesController < ApplicationController
  def update_comment
    @ecg_reading = HeartRate.find(params[:id])
    @ecg_reading.update(comment: params[:comment])
  end
end