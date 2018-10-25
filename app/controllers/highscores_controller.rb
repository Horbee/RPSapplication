class HighscoresController < ApplicationController

	def new # show the form for the new record, will have template
		@newScore = Highscore.new
	end


	def create # save the nem record, save and redirect
  		@newScore = Highscore.new(allowed_params)
  		if @newScore.save
  			redirect_to root_path
  		end
  	end

  	private
  		def allowed_params
  			params.require(:highscore).permit(:name, :win, :rounds, :rate)
  		end

end
