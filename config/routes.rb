Rails.application.routes.draw do

  root 'home#index'

  get 'home/index'

  get 'home/about'

  root 'works#index'

  get 'works/index'

  get 'works/project1'

  get 'works/project2'

  get 'works/project3'

  get 'works/project4'

  get 'works/project5'


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
