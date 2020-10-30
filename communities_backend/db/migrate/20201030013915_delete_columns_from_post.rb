class DeleteColumnsFromPost < ActiveRecord::Migration[6.0]
  def change
    remove_column :comments, :community_id
    add_column :comments, :post_id, :bigint
    add_index :comments, :post_id
  end
end
