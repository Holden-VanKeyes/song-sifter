class AddLyricsSnippetIdToInspirations < ActiveRecord::Migration[6.1]
  def change
    add_column :inspirations, :lyric_snippet_id, :integer
  end
end
