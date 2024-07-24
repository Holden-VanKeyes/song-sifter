# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2024_07_19_173042) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "chord_progressions", force: :cascade do |t|
    t.string "category"
    t.string "description"
    t.string "author"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "title", default: "chords"
  end

  create_table "creations", force: :cascade do |t|
    t.string "title"
    t.string "music_link"
    t.integer "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "about"
    t.integer "inspiration_id"
  end

  create_table "enigmas", force: :cascade do |t|
    t.string "category"
    t.string "description"
    t.string "author"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "title", default: "enigma"
  end

  create_table "inspirations", force: :cascade do |t|
    t.string "title"
    t.integer "user_id"
    t.integer "chord_progression_id"
    t.integer "enigma_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "lyric_snippet_id"
  end

  create_table "lyric_snippets", force: :cascade do |t|
    t.string "category"
    t.string "description"
    t.string "author"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "title", default: "lyrics"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "profile_pic"
    t.string "bio"
    t.string "password_digest"
    t.string "email"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "city"
    t.string "state"
    t.string "country"
  end

end
