class Api::V1::CommunitiesController < ApplicationController
    def index
        communities = Community.all
        render json: CommunitySerializer.new(communities,{include: [:posts]}).serializable_hash
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
        render json: CommunitySerializer.new(community,{include: [:posts]}).serializable_hash
    end

    def destroy
        community = Community.find_by_id(params[:id])
        community.posts.each do |x|
            x.comments.destroy_all
        end
        community.posts.destroy_all
        community.destroy
    end
end
