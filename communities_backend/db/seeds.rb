require "faker"

User.destroy_all
Community.destroy_all
Post.destroy_all

10.times {
  User.create(username: Faker::Internet.unique.username)
}

10.times {
  Community.create(name: Faker::Game.title)
}

Community.all.each do |x|
  newArr = Array.new(10, Post.new(title: Faker::Lorem.word, content: Faker::Lorem.paragraph(sentence_count: 4), user_id: Faker::Number.within(range: 0..9)))
  newArr.each do |y|
    x.posts << y
  end
end
