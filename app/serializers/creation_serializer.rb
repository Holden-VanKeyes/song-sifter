class CreationSerializer < ActiveModel::Serializer
  attributes :id, :title, :music_link, :inspiration_id, :user_id, :username, :about, :get_avatars, :inspirations

  def get_avatars
   
    id = object.user_id
    avatars = User.show_pics(id)
    return avatars
  end

  def username
    id = object.user_id
    user = User.find(id)
    return user.username

   
  end

  def get_categories
   #User.where inspirations. category match params
  end
end
