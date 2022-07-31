Rails.application.routes.draw do
  
  resources :creations
  resources :lyric_snippets
  resources :enigmas
  resources :chord_progressions
  resources :inspirations
  resources :users

  get '/random_enigma', to: "enigmas#get_random_enigma"
  get '/random_lyrics', to: "lyric_snippets#get_random_lyrics"
  get '/random_chords', to: "chord_progressions#get_random_chords"

  get '/filtered_enigmas', to: 'enigmas#get_filtered_enigmas'
  get '/filtered_lyrics', to: 'lyric_snippets#get_filtered_lyrics'
  get '/filtered_chords', to: 'chord_progressions#get_filtered_chords'
  get '/filtered_creations', to: 'creations#get_filtered_creations'

  get '/user_inspirations', to: "inspirations#get_user_inspirations"

  delete '/logout', to: "sessions#destroy"
  post '/login', to: "sessions#create"
  post '/signup', to: "users#create"

  # to remeber session cookie on refresh
  get '/me', to: "users#show"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
