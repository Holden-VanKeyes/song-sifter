class Inspiration < ApplicationRecord
    belongs_to :user
    belongs_to :chord_progression
    belongs_to :lyric_snippet
    belongs_to :enigma
end
