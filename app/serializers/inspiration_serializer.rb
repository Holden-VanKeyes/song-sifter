class InspirationSerializer < ActiveModel::Serializer
  attributes :id, :title, :user_id,  :enigma_return, :lyric_return, :chord_return

  def enigma_return
    object.enigma.enigma
   
  
  end

  def lyric_return
    object.lyric_snippet.lyrics
  end

  def chord_return
    object.chord_progression.chords
  end

end
