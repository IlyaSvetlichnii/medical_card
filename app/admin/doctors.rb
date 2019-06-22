ActiveAdmin.register Doctor do
  permit_params :name, :last_name, :patronymic, :email, :phone_number, :password
# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
# permit_params :list, :of, :attributes, :on, :model
#
# or
#
# permit_params do
#   permitted = [:permitted, :attributes]
#   permitted << :other if params[:action] == 'create' && current_user.admin?
#   permitted
# end
form do |f|
  f.inputs do
    f.input :name
    f.input :email
    f.input :phone_number
    f.input :last_name
    f.input :patronymic
    f.input :password
    # f.input :password_confirmation
  end
  f.actions
end

end
