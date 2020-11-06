require "pry"

class Api::V1::PostsController < ApplicationController
  def index
    posts = Post.where("community_id = ?", params[:community_id])
    render json: PostSerializer.new(posts, {include: [:comments]}).serializable_hash
  end

  def show
    post = Post.find_by_id(params[:id])
    render json: PostSerializer.new(post, {include: [:comments]}).serializable_hash
  end


  def create
    post = Post.new(title: params[:title], content: params[:content], community_id: params[:community_id], user_id: params[:user_id])
    community = Community.find_by_id(params[:community_id])
    if post.save
      render json: PostSerializer.new(post).serializable_hash
    else
      render json: { errors: post.errors.full_messages }
    end
  end
end
