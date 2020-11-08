class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.string :title
      t.string :content
      t.belongs_to :community, class_name: "community", foreign_key: "community_id"
      t.timestamps
    end
  end
end
