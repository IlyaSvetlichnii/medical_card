class Doctor < ApplicationRecord
  has_secure_password

  mount_uploader :avatar, AvatarUploader

  has_many :patients
end
