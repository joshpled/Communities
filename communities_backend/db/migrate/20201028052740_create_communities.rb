class CreateCommunities < ActiveRecord::Migration[6.0]
  def change
    create_table :communities do |t|
      t.string :name
      t.has_many :posts, class_name: "post", foreign_key: "reference_id"
      t.timestamps
    end
  end
end
