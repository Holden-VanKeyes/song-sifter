class AddDetailsToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :city, :string
    add_column :users, :state, :string
    add_column :users, :country, :string
  end
end
