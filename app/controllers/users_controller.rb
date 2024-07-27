class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create], :raise => false
    rescue_from ActiveRecord::RecordNotFound, with: :user_not_found
    
    def create
     user = User.create!(user_params)
     session[:user_id] = user.id
     render json: user
    end

    def show
       if current_user
        render json: current_user
       else
        render json: {error:"No active session"}, status: :unauthorized
       end
    end
     
    def get_selected_user
      user = User.find(params[:id])
      render json: user
    end

    def index
        render json: User.all
    end

    def update
        # byebug
        user = User.find(params[:id])
        user.update(update_profile_params)
        render json: user, status: :accepted
    end
 
    def destroy
    #     byebug
     user = User.find(params[:id])
     user.destroy
     head :no_content
    end





    private
    def user_params
     params.permit(:username, :password, :password_confirmation, :profile_pic, :bio, :email, :city, :state, :country)
    end

    def update_profile_params
      params.permit(:username, :profile_pic, :country, :quote, :quote_artist, :under_radar, :under_radar_link,
                    :under_radar_play_count, :fav_song, :fav_song_artist, :fav_song_link)
    end

    def user_not_found
        render json: {error: "User not found"}, status: :not_found
    end
end
