class CreationSerializer < ActiveModel::Serializer
  attributes :id, :title, :music_link, :user_id, :about, :get_avatars, :inspirations
  
  def get_avatars
   
    id = object.user_id
    avatars = User.show_pics(id)
    return avatars
  end

  def get_categories
   #User.where inspirations. category match params
  end
end
