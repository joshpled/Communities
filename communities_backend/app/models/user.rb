class User < ApplicationRecord
    has_many :user_communities
    has_many :posts
    has_many :communities, through: :user_communities
    validates :username, presence: :true, uniqueness: true
 
end

