class RenameBioToInstrument < ActiveRecord::Migration[6.1]
  def change
    rename_column :users, :bio, :instrument
  end
end
