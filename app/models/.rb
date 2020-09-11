class Review < ApplicationRecord
  belongs_to :daycare
  belongs_to :user
end