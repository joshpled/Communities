class CommunitySerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :id
  has_many :user_communities
  has_many :posts, serializer: PostSerializer

  def serializable_hash
    data = super

    if data[:data].is_a? Hash
      data[:data][:attributes]

    elsif data[:data].is_a? Array
      data[:data].map{ |x| x[:attributes] }

    elsif data[:data] == nil
      nil

    else
      data
    end
  end
end
