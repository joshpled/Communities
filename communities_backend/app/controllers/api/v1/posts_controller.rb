class Api::V1::PostsController < ApplicationController
    def index
        posts = Post.all
        render json: PostSerializer.new(posts).serializable_hash
    end

    def create
        byebug
        post = Post.new(title:,content:)
        if post.save
            render json: PostSerializer.new(post).serializable_hash
          else
            render json: { errors: post.errors.full_messages }
          end
    end

end
