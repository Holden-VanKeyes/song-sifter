class CreateInspirations < ActiveRecord::Migration[6.1]
  def change
    create_table :inspirations do |t|
      t.string :title
      t.integer :user_id
      t.integer :chord_progression_id
      t.integer :enigma_id
      t.integer :lyric_snippet

      t.timestamps
    end
  end
end
