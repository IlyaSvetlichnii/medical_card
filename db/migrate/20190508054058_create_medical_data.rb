class CreateMedicalData < ActiveRecord::Migration[5.2]
  def change
    create_table :ecg do |t|
      t.references :patient, foreign_key: true
      t.json       :content

      t.timestamps
    end

    create_table :medical_files do |t|
      t.references :patient, foreign_key: true
      t.string     :title
      t.json       :basic_data

      t.timestamps
    end

    create_table :temperatures do |t|
      t.references :patient, foreign_key: true
      t.string     :value

      t.timestamps
    end
  end
end