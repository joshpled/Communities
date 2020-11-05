require "pry"

class Api::V1::PostsController < ApplicationController
  def index
    posts = Post.all
    render json: PostSerializer.new(posts).serializable_hash
  end

  def create
    post = Post.new(title: params[:title], content: params[:content], community_id: params[:community_id], user_id: params[:user_id])
    
    binding.pry
    
    community = Community.find_by_id(params[:community_id])
    if post.save
      render json: PostSerializer.new(post)
    else
      render json: { errors: post.errors.full_messages }
    end
  end
end
