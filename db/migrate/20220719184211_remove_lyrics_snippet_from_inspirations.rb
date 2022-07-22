class RemoveLyricsSnippetFromInspirations < ActiveRecord::Migration[6.1]
  def change
    remove_column :inspirations, :lyric_snippet, :integer
  end
end
