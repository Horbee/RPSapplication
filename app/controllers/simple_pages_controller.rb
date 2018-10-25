class SimplePagesController < ApplicationController
  
  def index
	@scores = Highscore.order(rate: :desc).limit(10)
	@newScore = Highscore.new
  end

  

end
