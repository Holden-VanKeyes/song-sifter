class CreateChordProgressions < ActiveRecord::Migration[6.1]
  def change
    create_table :chord_progressions do |t|
      t.string :category
      t.string :chords
      t.string :author

      t.timestamps
    end
  end
end
