class Patient < ApplicationRecord
  has_secure_password

  mount_uploader :avatar, AvatarUploader

  has_many :heart_rates
  has_many :pulse_oximeters
  has_many :pulses

  belongs_to :doctor
end
