class CreateDoctors < ActiveRecord::Migration[5.2]
  def change
    create_table :doctors do |t|
      t.string :name
      t.string :last_name
      t.string :patronymic
      t.string :password_digest
      t.string :email
      t.string :phone_number
      t.string :loginname

      t.timestamps
    end
  end
end
