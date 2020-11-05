class Api::V1::CommunitiesController < ApplicationController
    def index
        communities = Community.all
        render json: CommunitySerializer.new(communities).serializable_hash
    end


    def create 
        community = Community.new(name: params[:name])
        if community.save
            render json: CommunitySerializer.new(community,{include: [:posts]}).serializable_hash
          else
            render json: { errors: community.errors.full_messages }
          end
    end

    def show
        community = Community.find_by_id(params[:id])
        options = {
            include: [:posts]
          }
        render json: CommunitySerializer.new(community,options).serializable_hash
    end
end
