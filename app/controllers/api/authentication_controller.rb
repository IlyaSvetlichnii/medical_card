class Api::AuthenticationController < ApplicationController
  before_action :authorize_request, except: :login

  # POST /auth/login
  def login
    basic, token = request.headers['Authorization'].split " "
    params = Base64.decode64 token
    email, password = params.split ":"

    @user = Patient.find_by_email(email)
    if @user.valid_password?(password)
      token = JsonWebToken.encode(user_id: @user.id)
      time = Time.now + 24.hours.to_i

      render json: {
        token: token,
        exp: time.strftime("%m-%d-%Y %H:%M"),
      }, status: :ok
    else
      render json: { error: 'unauthorized' }, status: :unauthorized
    end

  rescue
    render json: { error: 'Необходимо передать email и password' }, status: :unprocessable_entity

  end
end