class Api::V1::UsersController < ApplicationController
    def index
        users = User.all
        render json: UserSerializer.new(users).serializable_hash
    end

    def create
      
        user = User.new(user_params)
        if user.save
          session[:user_id] = user.id 
          binding.pry
          
          render json: { "token":"succesful" }
        else 
          render json: { "token":"unsuccesful" }
        end
      
    end

    private

  def user_params
    params.require(:user).permit(:username, :email, :password, :password_confirmation)
  end
  

end
