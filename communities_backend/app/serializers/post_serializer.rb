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
    
    binding.pry
    
  end
end
