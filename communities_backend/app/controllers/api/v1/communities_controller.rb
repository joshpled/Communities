class Api::V1::CommunitiesController < ApplicationController

  def index
    communities = Community.all
    render json: CommunitiesSerializer.new(communities).serializable_hash
  end

  def show
  end
end
