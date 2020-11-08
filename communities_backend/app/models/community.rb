class Community < ApplicationRecord
    has_many :posts
    has_many :comments, through: :posts
end
