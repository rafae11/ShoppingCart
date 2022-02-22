ShoppingCart

**********************************************************
# To Create a new project 

main project
`docker-compose run app sh -c "django-admin.py startproject app ."`

common functionality in this section
`docker-compose run app sh -c "python manage.py startapp core"`

**********************************************************

# To run tests with linter

`docker-compose run app sh -c "python manage.py test && flake8"`

**********************************************************

# To update project requirements 

make sure to update requirements.txt file and run.

`docker-compose build`

**********************************************************
