class Api::V1::PostsController < ApplicationController
    def index
        posts = Post.all
        render json: PostSerializer.new(posts).serializable_hash
    end
end
