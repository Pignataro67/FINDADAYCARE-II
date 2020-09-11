class DaycareSerializer < ActiveModel::Serializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :location, :rating, :review_count, :yelp_id, :phone
  has_many :my_daycares
  has_many :users, through: :my_daycares
end  