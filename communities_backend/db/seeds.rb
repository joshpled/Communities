require "faker"

Community.destroy_all
Post.destroy_all
Comment.destroy_all

10.times {
  Community.create(name: Faker::Movie.title)
}

Community.all.each do |x|
  10.times{
    x.posts << (Post.new(title: Faker::Movie.quote, content: Faker::Lorem.paragraph(sentence_count: 4)))
  }
end

Post.all.each do |x|
  5.times{
    x.comments << Comment.create(content: Faker::Lorem.paragraph(sentence_count: 4))
  }
end
