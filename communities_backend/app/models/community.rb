class Community < ApplicationRecord
    has_many :user_communities
    has_many :posts
end
