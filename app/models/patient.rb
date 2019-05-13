class Patient < ApplicationRecord
  has_secure_password

  devise :database_authenticatable, :registerable

  has_many :medical_datums

  belongs_to :doctor
end
