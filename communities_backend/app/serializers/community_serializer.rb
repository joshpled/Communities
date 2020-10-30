require "pry"

class CommunitySerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :id
  has_many :user_communities
  has_many :posts, serializer: PostSerializer

  def serializable_hash
    data = super
    if data[:data].is_a? Hash
      community = Array.new
      community << data[:data][:attributes]
      data[:included].each do |x|
        community << { id: x[:id], title: x[:attributes][:title], content: x[:attributes][:content], user_id: x[:relationships][:user][:data][:id] }
      end
      return community
    elsif data[:data].is_a? Array
      data[:data].map { |x| x[:attributes] }
    elsif data[:data] == nil
      nil
    else
      data
    end
  end
end
