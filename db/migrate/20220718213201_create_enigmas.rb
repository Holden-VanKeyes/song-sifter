class CreateEnigmas < ActiveRecord::Migration[6.1]
  def change
    create_table :enigmas do |t|
      t.string :category
      t.string :enigma
      t.string :author

      t.timestamps
    end
  end
end
