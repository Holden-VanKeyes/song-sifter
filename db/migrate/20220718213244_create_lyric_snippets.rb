class CreateLyricSnippets < ActiveRecord::Migration[6.1]
  def change
    create_table :lyric_snippets do |t|
      t.string :category
      t.string :lyrics
      t.string :author

      t.timestamps
    end
  end
end
