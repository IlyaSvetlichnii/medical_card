class Api::EcgController < Api::BaseController
  def create
    value = eval(params[:ecg_sensor])

    if @current_user.heart_rates.create(value: value, data_type: 'ecg')
      render status: 200, json: {
        message: "Фаил успешно сохранен"
      }.to_json
    else
      render json: { error: 'Фаил не был сохранен' }, status: :unauthorized
    end
  end

  private

  def ecg_params
    params.permit(:value)
  end
end