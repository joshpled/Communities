class Api::V1::UsersController < ApplicationController
    def index
        users = User.all
        render json: UserSerializer.new(users).serializable_hash
    end

    def create
        User.create(nickname:params[:nickname])
    end
end
