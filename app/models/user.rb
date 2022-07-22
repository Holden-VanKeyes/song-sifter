class User < ApplicationRecord
    has_many :creations
    has_many :inspirations
    has_many :enigmas, through: :inspirations
    has_many :lyric_snippets, through: :inspirations
    has_many :chord_progressions, through: :inspirations
end
