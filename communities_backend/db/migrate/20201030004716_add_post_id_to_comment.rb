class AddPostIdToComment < ActiveRecord::Migration[6.0]
  def change
    add_column :comments, :community_id, :bigint
  end
end
