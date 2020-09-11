class MyDaycareSerializer 
  include FastJsonapi::ObjectSerializer
  attributes :id, :notes, :schedule_visit, :favorite, :daycare_id
  belongs_to :daycare
end