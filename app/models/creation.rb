class Creation < ApplicationRecord
    belongs_to :user
    belongs_to :inspiration
    has_many :inspirations, through: :user


    def self.filter_helper(idArr)
       
    
     
   
    list =  idArr.map do |id|
        
        self.where(user_id: id)
        
        
     end
    
      list
    end
end
