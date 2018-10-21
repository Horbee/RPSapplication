class SimplePagesController < ApplicationController
  
  def index
	@scores = Highscore.order(rate: :desc)
	@newScore = Highscore.new
	# rate = wins / (wins + lose) 
	# Highscore.create(name: "Tristan", win: 15, lose: 17, rate: 15 / 17)
  end

  

end
