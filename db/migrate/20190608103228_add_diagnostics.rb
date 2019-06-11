class AddDiagnostics < ActiveRecord::Migration[5.2]
  def change
    create_table :diagnostics do |t|
      t.references :patient, foreign_key: true
      t.references :doctor, foreign_key: true
      t.string     :title
      t.text       :description

      t.timestamps
    end
  end
end
