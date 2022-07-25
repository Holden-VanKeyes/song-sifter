class InspirationsController < ApplicationController

    def create
    inspiration = Inspiration.create!(inspiration_params)
    render json: inspiration
    end

    def show
     
    inspiration = Inspiration.find(params[:id])
    render json: inspiration
    end

    def index
        render json: Inspiration.all
   

    
    end

    def get_user_inspirations
    inspirations = Inspiration.where(user_id: params[:user_id])
    render json: inspirations
    end

    def destroy
   

    inspiration = Inspiration.find(params[:id])
    inspiration.destroy
    head :no_content
    end


    private

    def inspiration_params
     params.permit(:title, :chord_progression_id, :enigma_id, :lyric_snippet_id, :user_id)
    end
end


