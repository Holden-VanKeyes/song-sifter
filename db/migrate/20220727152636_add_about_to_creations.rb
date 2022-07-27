class AddAboutToCreations < ActiveRecord::Migration[6.1]
  def change
    add_column :creations, :about, :string
  end
end
