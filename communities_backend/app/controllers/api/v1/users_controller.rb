class Api::V1::UsersController < ApplicationController
    def index
        users = User.all
        render json: UserSerializer.new(users).serializable_hash
    end

    def create
      
        user = User.new(user_params)
        if user.save

          
        end
      
    end

    private

  def user_params
    params.require(:user).permit(:username, :email, :password, :password_confirmation)
  end
  

end
