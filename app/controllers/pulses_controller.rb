class PulsesController < ApplicationController
  def index
    @pulses = Pulse.all
  end

  def show
    @patient = Patient.first
    pulse = @patient.pulses.find(params[:id])
    @array = pulse.value.map {|value| value.to_i }
  end
end