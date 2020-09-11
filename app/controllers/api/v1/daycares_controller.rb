Class Api::v1::DaycaresController < ApplicationController
  before_action :get_daycare, only [:show, :update, :destroy]

  def index
    @daycares = Daycare.all
    daycares_json = DaycareSerializer.new(@daycares).serialized_json
    render json: @daycares_json	        
  end
  
  def show
    @daycare = Daycare.find_by(id: params[:id])
    daycare_json = DaycareSerializer.new(@daycare).serialized_json
    render json: daycare_json
  end

  def create 
    daycare = Daycare.find_by(yelp_id: params[:daycare][:yelp_id])
    if !!daycare
      if !!current_user.daycares.find_by(yelp_id: params[:daycare][:yelp_id])
            
      render json: {error: "You have already saved this daycare to your list"}
        else
          @mydaycare = MyDaycare.create(user_id: current_user.id, daycare_id: daycare.id)
          my_daycare_json = MyDaycareSerializer.new(@my_daycare).serialized_json
          render json: my_daycare_json
      end
    else
      daycare = Daycare.new(daycare_params)
      if daycare.save
        @mydaycare = MyDaycare.create(user_id: current_user.id, daycare_id: daycare.id)
        my_daycare_json = MyDaycareSerializer.new(@my_daycare).serialized_json
        render json: my_daycare_json
      else
        render json: daycare.errors, status: :unprocessable_entity
      end
    end
  end

  private
  def get_daycare
    @daycare = Daycare.find(params[:id])
  end

  def daycare_params
    params.require(:daycare).permit(:name, :location, :rating, :review_count, :yelp_id, :phone)
  end
end