class CreateEcg < ActiveRecord::Migration[5.2]
  def change
    create_table :heart_rates do |t|
      t.references :patient, foreign_key: true
      t.string     :data_type
      t.string     :file
      t.text       :value, array: true, default: []
      t.string     :assigned_number
      t.text       :comment

      t.timestamps
    end
  end
end