class CreatePatients < ActiveRecord::Migration[5.2]
  def change
    create_table :patients do |t|
      t.string :name
      t.string :last_name
      t.string :patronymic
      t.string :gender
      t.string :address
      t.string :phone_number
      t.string :dob
      t.string :blood_type
      t.string :allergy
      t.string :email,              null: false, default: ""
      t.string :password_digest
      t.string :loginname
      t.text   :description

      t.references :doctor, foreign_key: true

      t.timestamps null: false
    end
  end
end
