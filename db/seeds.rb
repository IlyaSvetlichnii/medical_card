# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password') if Rails.env.development?
doctor_1 = Doctor.create(name: 'Азамат', last_name: 'Байшуаков', password: '123123', password_confirmation: '123123')
doctor_2 = Doctor.create(name: 'Вадим', last_name: 'Глебов', password: '123123', password_confirmation: '123123')

Patient.create(
  doctor:        doctor_1,
  name:         'Пациент1',
  last_name:    'Склифасовский',
  patronymic:   'Сергеевич',
  address:      'ул. Советская 182/2',
  phone_number: '+996777333333',
  dob:          DateTime.now,
  blood_type:   'первая положительная',
  allergy:      'Пыль',
  email:        'patient1@gmail.com',
  password:     '123123',
  password_confirmation: '123123'
)
