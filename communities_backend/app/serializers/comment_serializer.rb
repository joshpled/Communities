class CommentSerializer
  include FastJsonapi::ObjectSerializer
  attributes :content, :user_id, :post_id

  def serializable_hash
    data = super
    
    binding.pry
    
  end
end
