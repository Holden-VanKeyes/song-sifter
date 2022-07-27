class Creation < ApplicationRecord
    belongs_to :user
    has_many :inspirations, through: :users
end
