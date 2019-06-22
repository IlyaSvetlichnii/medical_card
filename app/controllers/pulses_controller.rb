class PulsesController < ApplicationController
  # before_action :current_doctor

  def index
    @pulses = _patient.pulse_oximeters
  end

  def show
    @patient = _patient
    @pulse = _patient.pulse_oximeters.find(params[:id])
    @array = @pulse.value.map {|value| value.to_i }
  end

  def comment
    @pulse = PulseOximeter.find(params[:id])
    @pulse.update(comment: params[:comment])
  end
end