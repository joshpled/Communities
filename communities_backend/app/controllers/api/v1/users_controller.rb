class Api::V1::UsersController < ApplicationController
    def index
        users = User.all
        render json: UserSerializer.new(users).serializable_hash
    end

    def create
        user = User.new(user_params)
        
        binding.pry
        
        user.valid? ? user.save : user.errors
        render json: 
    end

    private

  def user_params
    # strong parameters - whitelist of allowed fields #=> permit(:name, :email, ...)
    # that can be submitted by a form to the user model #=> require(:user)
    params.require(:user).permit(:username, :email, :password, :password_confirmation)
  end
  

end
