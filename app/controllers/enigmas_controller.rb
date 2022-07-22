class EnigmasController < ApplicationController

    def create
        enigma = Enigma.create!(enigma_params)
        render json: enigma
       end
   
       def show
        # enigma = Enigma.find(params[:id])
        # render json: enigma
        render json: Enigma.find_by(id: params[:id]) || Enigma.random
       end

       def get_random_enigma
        # byebug
        @one_enigma = Enigma.where(category: params[:category])
        
         render json: @one_enigma.limit(1).order("RANDOM()").first
         
       end
   
      def index
       render json: Enigma.all
      end
   
   
       private
   
       def enigma_params
        params.permit(:category, :enigma, :author)
       end
end
