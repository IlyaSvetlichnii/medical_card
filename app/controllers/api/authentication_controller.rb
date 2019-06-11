class Api::AuthenticationController < Api::BaseController
  skip_before_action :authorize_request

  # POST /api/login
  def login
    params = Base64.decode64 request.headers['Authorization']
    phone_number, password = params.split ":"

    @patient = Patient.where(phone_number: phone_number).first

    if @patient.present? && @patient.authenticate(password)
      token = JsonWebToken.encode(user_id: @patient.id)
      time = Time.now + 128.hours.to_i

      render json: {
        token: token,
        exp: time.strftime("%m-%d-%Y %H:%M"),
      }, status: :ok
    else
      render json: { error: 'не авторизован' }, status: :unauthorized
    end

  rescue
    render json: { error: 'Необходимо передать phone_number и password' }, status: :unprocessable_entity
  end
end
