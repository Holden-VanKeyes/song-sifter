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

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
