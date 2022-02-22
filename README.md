ShoppingCart

**********************************************************
# To Create a new project 

`docker-compose run app sh -c "django-admin.py startproject app ."`

**********************************************************

# To run tests with linter

`docker-compose run app sh -c "python manage.py test && flake8"`

**********************************************************

# To update project requirements 

make sure to update requirements.txt file and run.

`docker-compose build`

**********************************************************
