class AddLinksAuthorsAndCountToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :fav_song_link, :string
    add_column :users, :fav_song_artist, :string
    add_column :users, :quote_artist, :string
    add_column :users, :under_radar_play_count, :integer
    add_column :users, :under_radar_link, :string
  end
end
