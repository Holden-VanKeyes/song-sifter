class ChangeEnigmaColumnName < ActiveRecord::Migration[6.1]
  def change
    rename_column :enigmas, :type, :title
  end
end
