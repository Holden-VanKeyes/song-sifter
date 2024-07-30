class RemoveDefaultParamsOnUser < ActiveRecord::Migration[6.1]
  def change
    change_column_default :users, :fav_song, nil
    change_column_default :users, :quote, nil
    change_column_default :users, :under_radar, nil
  end
end
