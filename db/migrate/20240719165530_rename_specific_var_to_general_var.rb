class RenameSpecificVarToGeneralVar < ActiveRecord::Migration[6.1]
  def change
    rename_column :chord_progressions, :chords, :description
    rename_column :enigmas, :enigma, :description
    rename_column :lyric_snippets, :lyrics, :description
  end
end
