class ChordProgressionsController < ApplicationController

    def create
     chords = ChordProgression.create!(chord_params)
     render json: chords
    end

    def show
     chords = ChordProgression.find(params[:id])
     render json: chords
    end

    def get_filtered_chords
        chords = ChordProgression.all.where(category: params[:category])
        render json: chords
      end

    def get_random_chords
        # byebug
        @description = ChordProgression.where(category: params[:category])
      
        
         render json: @description.limit(1).order("RANDOM()").first
         
       end

    private

    def chord_params
     params.permit(:category, :description, :author)
    end
end
