class CreateHighscores < ActiveRecord::Migration[5.2]
  def change
    create_table :highscores do |t|
      t.string :name
      t.integer :win
      t.integer :lose
      t.decimal :rate

      t.timestamps
    end
  end
end
