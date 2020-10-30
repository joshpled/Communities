require 'faker'

User.destroy_all
Community.destroy_all


10.times {
    User.create(nickname:Faker::Name.first_name)
}

10.times{
    Community.create(name:Faker::Game.title)
}
