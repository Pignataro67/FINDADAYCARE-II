class Daycare < ApplicationRecord
  has_many :my_daycares
  has_many :users, through: :my_daycares
end