class AddPasswordToUser < ActiveRecord::Migration[6.0]
  def change
    remove_column :users, :nickname
    add_column :users, :password, :column_type, :column_options
    #Ex:- add_column("admin_users", "username", :string, :limit =>25, :after => "email")
  end
end
