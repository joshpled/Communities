class PostSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :content
  attribute :created_at do |x|
    x[:created_at].strftime('%D %R')
  end
  belongs_to :user
  belongs_to :community

  def serializable_hash
    data = super
    # byebug
    if data[:data].is_a? Hash
      community = Array.new
      community << data[:data][:attributes]
      data[:included].each do |x|
        byebug
        community << { id: x[:id], title: x[:attributes][:title], content: x[:attributes][:content], user_id: x[:relationships][:user][:data][:id], created_at: x[]}
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
