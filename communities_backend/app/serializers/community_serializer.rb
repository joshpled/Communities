require "pry"

class CommunitySerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :id
  attribute :created_at do |x|
    x[:created_at].strftime('%D %R')
  end
  has_many :user_communities
  has_many :posts, serializer: PostSerializer

  def serializable_hash
    data = super  
    if data[:data].is_a? Array
      data[:data].map do |x|
        { id: x[:id], name: x[:attributes][:name], created_at: x[:attributes][:created_at] }
      end
    else
      { id: data[:data][:id], name: data[:data][:attributes][:name], created_at: data[:data][:attributes][:created_at] }
    end

  end
end
