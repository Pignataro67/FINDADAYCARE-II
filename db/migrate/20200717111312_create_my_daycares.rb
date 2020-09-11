class CreateMyDaycares < ActiveRecord::Migration[5.2]
  def change
    create_table :my_daycares do |t|
      t.integer :user_id
      t.integer_notes :daycare_id
      t.string :schedule_visit
      t.boolean :favorite

      t.timestamps
    end
  end
end
