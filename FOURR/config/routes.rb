=begin
Rails.application.routes.draw do
  get 'login/new'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
=end
Rails.application.routes.draw do
    resources :users
    get    'sign_in'   => 'login#new'
    post   'sign_in'   => 'login#create'
    delete 'sign_out'  => 'login#destroy'
end
