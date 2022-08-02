class User < ApplicationRecord
    has_many :creations, dependent: :destroy
    has_many :inspirations, dependent: :destroy
    has_many :enigmas, through: :inspirations
    has_many :lyric_snippets, through: :inspirations
    has_many :chord_progressions, through: :inspirations

    has_secure_password

    validates :username, presence: true, uniqueness: :true


    def self.show_pics(id)
        
        avatar = self.all.find(id)
       avatar[:profile_pic]
   
    end
    
end
