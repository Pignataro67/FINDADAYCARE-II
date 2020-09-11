class User < ApplicationRecord
  has_secure_password
  has_many :my_daycares
  has_many :daycares, through: :my_daycares

  validates :username, :email, :password, presence: true
  validates :email, uniqueness: true
end