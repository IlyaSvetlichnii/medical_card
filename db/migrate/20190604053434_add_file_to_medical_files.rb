class AddFileToMedicalFiles < ActiveRecord::Migration[5.2]
  def change
    add_column :medical_files, :file, :string
  end
end
