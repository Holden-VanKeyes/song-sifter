class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :country, :profile_pic, :instrument, :password_digest, :email, :quote, :quote_artist,
             :fav_song, :fav_song_link, :fav_song_artist, :under_radar, :under_radar_link, :under_radar_play_count
end
