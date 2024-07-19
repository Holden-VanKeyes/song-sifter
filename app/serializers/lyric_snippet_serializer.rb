class LyricSnippetSerializer < ActiveModel::Serializer
  attributes :id, :title, :category, :description, :author, :inspirations
end
