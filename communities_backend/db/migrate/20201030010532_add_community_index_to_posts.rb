class AddCommunityIndexToPosts < ActiveRecord::Migration[6.0]
  def change
    add_index :posts, :community_id
  end
end
