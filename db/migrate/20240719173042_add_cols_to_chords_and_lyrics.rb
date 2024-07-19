class AddColsToChordsAndLyrics < ActiveRecord::Migration[6.1]
  def change
    add_column :chord_progressions, :title, :string, default: 'chords'
    add_column :lyric_snippets, :title, :string, default: 'lyrics'
  end
end
