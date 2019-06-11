class MedicalFile < ApplicationRecord
  mount_uploader :file, ImageUploader

  belongs_to :patient
end
