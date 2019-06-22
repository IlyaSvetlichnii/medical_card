class Api::PulseController < Api::BaseController
  def create
    pulse = params["pulse_sensor"]

    if pulse.present?
      @current_user.pulse_oximeters.create(value: eval(pulse))
      response_builder(:ok, "Показания пульса были успешно сохранены")
    else
      response_builder(422, "Необходимо передать параметр pulse_sensor")
    end
  rescue
    response_builder(422, "что то пошло не так")
  end

  private

  def response_builder(status, message)
    render status: status, json: {
      message: message
    }.to_json
  end
end