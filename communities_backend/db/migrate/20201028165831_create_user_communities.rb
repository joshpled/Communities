class CreateUserCommunities < ActiveRecord::Migration[6.0]
  def change
    create_table :user_communities do |t|
      t.bigint :user_id
      t.bigint :community_id
    end
  end
end
