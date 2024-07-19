class InspirationSerializer < ActiveModel::Serializer
  attributes :id, :title, :user_id,  :enigma_return, :lyric_return, :chord_return, :categories

  def enigma_return
   
    
    object.enigma.description 
   
  
  end

  def lyric_return
    object.lyric_snippet.description
  end

  def chord_return
    object.chord_progression.description
  end

  def categories
   catObj = {
    enigma_cat: object.enigma.category,
    lyric_cat: object.lyric_snippet.category,
    chord_cat: object.chord_progression.category
  }
  catObj
  end

end
