class Api::V1::UsersController < ApplicationController
  def index
    users = User.all
    render json: UserSerializer.new(users).serializable_hash
  end

  def show
    render json: user
  end

  def create
    user = User.new(user_params)

    if user.save
      session[:user_id] = user.id
      render json: user, only: [:name], status: :created, location: user
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:username)
  end
end
