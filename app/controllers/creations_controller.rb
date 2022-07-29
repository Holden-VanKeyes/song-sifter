class CreationsController < ApplicationController

    def create
     creation = Creation.create!(creation_params)
     render json: creation
    end
    

    def index
     render json: Creation.all
    end



    private

    def creation_params
     params.permit(:music_link, :user_id, :title, :about)
    end
end


