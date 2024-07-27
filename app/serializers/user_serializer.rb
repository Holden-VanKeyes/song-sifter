class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :profile_pic, :instrument, :password_digest, :email, :fav_song, :quote, :under_radar, :country
end
