class EnigmasController < ApplicationController

    def create
        enigma = Enigma.create!(enigma_params)
        render json: enigma
       end
   
       def show
       
        enigma = Enigma.find(params[:id])
        render json: enigma
        # render json: Enigma.find_by(id: params[:id]) || Enigma.random
       end


      def get_filtered_enigmas
        enigmas = Enigma.all.where(category: params[:category])
        render json: enigmas
      end

       def get_random_enigma
       
        @description = Enigma.where(category: params[:category])
        
         render json: @description.limit(1).order("RANDOM()").first
         
       end
   
      def index
       
       render json: Enigma.all
      end
   
   
       private
   
       def enigma_params
        params.permit(:category, :description, :author)
       end
end
