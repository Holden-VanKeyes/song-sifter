class Inspiration < ApplicationRecord
    belongs_to :user
    belongs_to :chord_progression
    belongs_to :lyric_snippet
    belongs_to :enigma


#     def self.filter_by_cat 
#      list = Inspiration.map do |i|
#         i.lyric_snippet_id.map do |l|
#             puts l if lyric
#     end
end
