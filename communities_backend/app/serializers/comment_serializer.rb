class CommentSerializer
  include FastJsonapi::ObjectSerializer
  attributes :content, :user_id, :post_id

  def serializable_hash
    data = super
    if data[:data].is_a? Array
      data[:data].map do |x|
        {id: x[:id], content: x[:attributes][:content], user_id: x[:attributes][:user_id], post_id: x[:attributes][:post_id]}
      end
    end
  end
end
