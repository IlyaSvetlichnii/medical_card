class Api::PatientsController < Api::BaseController
  # before_action :find_patient, only: %i[info]

  # # GET /users
  # def index
  #   @users = Patient.all
  #   render json: @users, status: :ok
  # end

  # GET /users/{username}
  def info
    render json: @current_user, status: :ok
  end

  # POST /users
  # def create
  #   @user = User.new(user_params)
  #   if @user.save
  #     render json: @user, status: :created
  #   else
  #     render json: { errors: @user.errors.full_messages },
  #            status: :unprocessable_entity
  #   end
  # end

  # # PUT /users/{username}
  # def update
  #   unless @user.update(user_params)
  #     render json: { errors: @user.errors.full_messages },
  #            status: :unprocessable_entity
  #   end
  # end

  # private

  # def user_params
  #   params.permit(
  #     :avatar, :name, :username, :email, :password, :password_confirmation
  #   )
  # end
end