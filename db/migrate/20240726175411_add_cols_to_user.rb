class AddColsToUser < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :fav_song, :string, default: "Tell us a song you've got on heavy rotation"
    add_column :users, :quote, :string, default: 'Drop us your favorite lyric or creative tidbit'
    add_column :users, :under_radar, :string, default: 'Link your favorite under the radar artist'
  end
end
