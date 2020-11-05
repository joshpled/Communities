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
      data[:data].map do |x|
        { id: x[:id], title: x[:attributes][:title], content: x[:attributes][:content], created_at: x[:attributes][:created_at] }
      end
    else
      data[:data]
    end
  end
end
