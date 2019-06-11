# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_06_08_103228) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_admin_comments", force: :cascade do |t|
    t.string "namespace"
    t.text "body"
    t.string "resource_type"
    t.bigint "resource_id"
    t.string "author_type"
    t.bigint "author_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_type", "author_id"], name: "index_active_admin_comments_on_author_type_and_author_id"
    t.index ["namespace"], name: "index_active_admin_comments_on_namespace"
    t.index ["resource_type", "resource_id"], name: "index_active_admin_comments_on_resource_type_and_resource_id"
  end

  create_table "admin_users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_admin_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_admin_users_on_reset_password_token", unique: true
  end

  create_table "diagnostics", force: :cascade do |t|
    t.bigint "patient_id"
    t.bigint "doctor_id"
    t.string "title"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["doctor_id"], name: "index_diagnostics_on_doctor_id"
    t.index ["patient_id"], name: "index_diagnostics_on_patient_id"
  end

  create_table "doctors", force: :cascade do |t|
    t.string "name"
    t.string "last_name"
    t.string "patronymic"
    t.string "password_digest"
    t.string "email"
    t.string "phone_number"
    t.string "loginname"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "heart_rates", force: :cascade do |t|
    t.bigint "patient_id"
    t.string "data_type"
    t.string "file"
    t.text "value", default: [], array: true
    t.string "assigned_number"
    t.text "comment"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["patient_id"], name: "index_heart_rates_on_patient_id"
  end

  create_table "patients", force: :cascade do |t|
    t.string "name"
    t.string "last_name"
    t.string "patronymic"
    t.string "gender"
    t.string "address"
    t.string "phone_number"
    t.string "dob"
    t.string "blood_type"
    t.string "allergy"
    t.string "email", default: "", null: false
    t.string "password_digest"
    t.string "loginname"
    t.text "description"
    t.bigint "doctor_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["doctor_id"], name: "index_patients_on_doctor_id"
  end

  create_table "pulse_oximeters", force: :cascade do |t|
    t.bigint "patient_id"
    t.text "value", default: [], array: true
    t.string "assigned_number"
    t.text "comment"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["patient_id"], name: "index_pulse_oximeters_on_patient_id"
  end

  add_foreign_key "diagnostics", "doctors"
  add_foreign_key "diagnostics", "patients"
  add_foreign_key "heart_rates", "patients"
  add_foreign_key "patients", "doctors"
  add_foreign_key "pulse_oximeters", "patients"
end
