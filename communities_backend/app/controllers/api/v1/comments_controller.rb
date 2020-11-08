class Api::V1::CommentsController < ApplicationController

  def index
    comments = Post.find_by_id(params[:post_id]).comments
    render json: CommentSerializer.new(comments).serializable_hash
  end

  def show
    byebug
  end

  def create
    byebug
  end

end
