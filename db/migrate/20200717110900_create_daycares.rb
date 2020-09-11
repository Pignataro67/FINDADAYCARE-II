class CreateDaycares < ActiveRecord::Migration[5.2]
  def change
    create_table :daycares do |t|
      t.string :name
      t.string :location
      t.decimal :rating
      t.integer :review_count
      t.string :phone
      t.string :yelp_id

      t.timestamps
    end
  end
end
