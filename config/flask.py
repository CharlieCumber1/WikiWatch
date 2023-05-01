from os import environ


class FlaskConfig:
    def __init__(self):
        self.SECRET_KEY = environ.get("SECRET_KEY")
        self.SQLALCHEMY_DATABASE_URI = environ.get("SQLALCHEMY_DATABASE_URI")
