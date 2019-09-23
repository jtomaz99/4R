class WelcomeController < ApplicationController
  def index
    render json: 'API OK'
  end
end
