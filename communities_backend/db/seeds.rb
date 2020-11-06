require "faker"

User.destroy_all
Community.destroy_all
Post.destroy_all
Comment.destroy_all

10.times {
  User.create(username: Faker::Internet.unique.username)
}

10.times {
  Community.create(name: Faker::Movie.title)
}

Community.all.each do |x|
  10.times{
    x.posts << (Post.new(title: Faker::Movie.quote, content: Faker::Lorem.paragraph(sentence_count: 4), user_id: Faker::Number.within(range: 0..9)))
  }
end

Post.all.each do |x|
  5.times{
    x.comments << Comment.create(content: Faker::Lorem.paragraph(sentence_count: 4), user_id: Faker::Number.within(range: 0..9))
  }
end
