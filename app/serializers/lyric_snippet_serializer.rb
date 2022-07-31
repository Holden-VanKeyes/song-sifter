class LyricSnippetSerializer < ActiveModel::Serializer
  attributes :id, :category, :lyrics, :author, :inspirations
end
