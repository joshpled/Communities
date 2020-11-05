require "pry"

class CommunitySerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :id
  attribute :created_at do |x|
    x[:created_at].strftime('%D %R')
  end
  has_many :user_communities
  has_many :posts 

  def serializable_hash
    data = super
    if data[:data].is_a? Hash
      community = Array.new
      community << data[:data][:attributes]
      data[:included].each do |x|
        community << { community_id: x[:relationships][:community][:data][:id], id: x[:id], title: x[:attributes][:title], content: x[:attributes][:content], user_id: x[:relationships][:user][:data][:id], created_at: x[:attributes][:created_at] }
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
