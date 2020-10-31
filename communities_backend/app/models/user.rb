class User < ApplicationRecord
    has_many :user_communities
    has_many :posts
    has_many :communities, through: :user_communities

    has_secure_password
end