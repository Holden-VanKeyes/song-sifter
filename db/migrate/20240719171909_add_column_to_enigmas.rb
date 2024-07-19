class AddColumnToEnigmas < ActiveRecord::Migration[6.1]
  def change
    add_column :enigmas, :type, :string, default: 'enigma'
  end
end
