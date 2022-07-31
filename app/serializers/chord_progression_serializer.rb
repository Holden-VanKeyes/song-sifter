class ChordProgressionSerializer < ActiveModel::Serializer
  attributes :id, :category, :chords, :author, :inspirations
end
