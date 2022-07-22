class CreateCreations < ActiveRecord::Migration[6.1]
  def change
    create_table :creations do |t|
      t.string :title
      t.string :music_link
      t.integer :user_id

      t.timestamps
    end
  end
end
