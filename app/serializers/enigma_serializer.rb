class EnigmaSerializer < ActiveModel::Serializer
  attributes :id, :category, :enigma, :author, :inspirations
end
