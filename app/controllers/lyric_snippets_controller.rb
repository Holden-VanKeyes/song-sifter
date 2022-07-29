class LyricSnippetsController < ApplicationController

    def create
        lyrics = LyricSnippet.create!(lyric_params)
        render json: lyrics
    end

    def index
      render json: LyricSnippet.all
    end
   
       def show
        lyrics = LyricSnippet.find(params[:id])
        render json: lyrics
       end
   

       def get_filtered_lyrics
        lyrics = LyricSnippet.all.where(category: params[:category])
        render json: lyrics
      end
   
       def get_random_lyrics
       
        @lyrics = LyricSnippet.where(category: params[:category])
        
         render json: @lyrics.limit(1).order("RANDOM()").first
         
       end
   
       private
   
       def lyric_params
        params.permit(:category, :lyrics, :author)
       end
end
