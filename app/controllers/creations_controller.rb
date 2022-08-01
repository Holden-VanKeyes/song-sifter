class CreationsController < ApplicationController

    def create
     creation = Creation.create!(creation_params)
     render json: creation
    end
    

    def index
     render json: Creation.all
    end
     
    def show
        # byebug
    #  filtered_creations = Creation.all.where(user_id: params[:user_id])
    #  render json: filtered_creations
    end

    def get_filtered_creations
        ids = params[:user_id]
        
        idArr = ids.split(',')

        puts idArr

        # ids.map do |id|
        #     idArr << id
      
        # idArr << ids
       
        filtered_creations = Creation.filter_helper(idArr)
        # filtered_creations = Creation.all.where(user_id: params[:user_id])
        # filtered_creations.filter_helper
       
        render json: filtered_creations
    end

      def destroy
        # creation = Creation.where(user_id: params[:user_id])
         
        creation = Creation.find(params[:id])
        creation.destroy
        head :no_content
        end


    private

    def creation_params
     params.permit(:music_link, :user_id, :title, :about)
    end
end


