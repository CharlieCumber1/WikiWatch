from flask import Flask

from config.flask import FlaskConfig
from models import db, migrate


def create_app():
    app = Flask(__name__)
    app.config.from_object(FlaskConfig())

    db.init_app(app)
    migrate.init_app(app, db)

    if __name__ == "__main__":
        app.run(host="0.0.0.0", port=5000)

    return app
