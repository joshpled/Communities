class CommentSerializer
  include FastJsonapi::ObjectSerializer
  attributes :content, :post_id
  attribute :created_at do |x|
    x[:created_at].strftime('%D %R')
  end

  def serializable_hash
    data = super
    if data[:data].is_a? Array
      data[:data].map do |x|
        { id: x[:id], content: x[:attributes][:content], post_id: x[:attributes][:post_id], created_at:  x[:attributes][:created_at] }
      end
    end
  end
end
