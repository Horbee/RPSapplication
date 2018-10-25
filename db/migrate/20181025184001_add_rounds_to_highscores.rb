class AddRoundsToHighscores < ActiveRecord::Migration[5.2]
  def change
    add_column :highscores, :rounds, :integer
    remove_column :highscores, :lose, :integer
    change_column :highscores, :win, :decimal
  end
end
