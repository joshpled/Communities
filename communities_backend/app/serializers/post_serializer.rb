class PostSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :content
  attribute :created_at do |x|
    x[:created_at].strftime("%D %R")
  end
  belongs_to :user
  belongs_to :community
  has_many :comments, serializer: CommentSerializer

  def serializable_hash
    data = super
    if data[:data].is_a? Array
      community = Community.find_by_id(data[:data][0][:relationships][:community][:data][:id])
      data[:data].map do |x|        
        { id: x[:id], title: x[:attributes][:title], content: x[:attributes][:content], created_at: x[:attributes][:created_at], community_name: community.name, community_id: community.id }
      end
    else
      community = Community.find_by_id(data[:data][:relationships][:community][:data][:id])
      { id: data[:data][:id], title:  data[:data][:attributes][:title], content: data[:data][:attributes][:content], created_at: data[:data][:attributes][:created_at], community_name: community.name, community_id: community.id }
    end
  end
end
