class AddPulses < ActiveRecord::Migration[5.2]
  def change
    create_table :pulse_oximeters do |t|
      t.references :patient, foreign_key: true
      t.text       :value, array: true, default: []
      t.string     :assigned_number
      t.text       :comment

      t.timestamps
    end
  end
end
