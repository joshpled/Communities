class Changeuserstable < ActiveRecord::Migration[6.0]
  def change
    remove_column :users, :nickname
    add_column :users, :password_digest, :string
    add_column :users, :email, :string
  end
end
