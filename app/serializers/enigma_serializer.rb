class EnigmaSerializer < ActiveModel::Serializer
  attributes :id, :title, :category, :description, :author, :inspirations
end
