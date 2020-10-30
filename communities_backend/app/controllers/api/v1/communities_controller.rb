class Api::V1::CommunitiesController < ApplicationController
    def index
        communities = Community.all
        render json: CommunitySerializer.new(communities).serializable_hash
    end

    def show
        community = Community.find_by_id(params[:id])

        render json: CommunitySerializer.new(community,{include: [:posts]})
    end
end
