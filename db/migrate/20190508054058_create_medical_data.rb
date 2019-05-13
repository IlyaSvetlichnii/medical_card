class CreateMedicalData < ActiveRecord::Migration[5.2]
  def change
    create_table :medical_data do |t|
      t.references :patient, foreign_key: true
      t.string     :data_type
      t.json       :basic_data

      t.timestamps
    end
  end
end