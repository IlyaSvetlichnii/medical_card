class PulsesController < ApplicationController
  before_action :current_doctor

  def index
    @pulses = PulseOximeter.all
  end

  def show
    @patient = Patient.first
    pulse = @patient.pulse_oximeters.find(params[:id])
    @array = pulse.value.map {|value| value.to_i }
  end
end