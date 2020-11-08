class Comment < ApplicationRecord
  belongs_to :post
  has_many :communities, through: :posts
end
