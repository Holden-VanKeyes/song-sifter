class AddInspirationIdToCreations < ActiveRecord::Migration[6.1]
  def change
    add_column :creations, :inspiration_id, :integer
  end
end
