# Create a migration with the required fields
create_table :admins do |t|
    t.string :email
    t.string :encrypted_password
    t.timestamps null: false
  end
  
  # Inside your Admin model
  devise :database_authenticatable, :timeoutable
  
  # Inside your routes
  devise_for :admins
  
  # Inside your protected controller
  before_action :authenticate_admin!
  
  # Inside your controllers and views
  admin_signed_in?
  current_admin
  admin_session