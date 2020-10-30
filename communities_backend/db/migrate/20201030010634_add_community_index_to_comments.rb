class AddCommunityIndexToComments < ActiveRecord::Migration[6.0]
  def change
    add_index :comments, :community_id
  end
end
