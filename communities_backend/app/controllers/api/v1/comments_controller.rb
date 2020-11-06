class Api::V1::CommentsController < ApplicationController

  def index
    comments = Post.find_by_id(params[:post_id]).comments
    render json: CommentSerializer.new(comments).serializable_hash
  end

  def show
    binding.pry
  end

  def create
    binding.pry
  end

end
