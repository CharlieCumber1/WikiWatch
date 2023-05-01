from os import environ

from flask import Flask

from config.flask import FlaskConfig
from models import db, migrate
from services.wiki_listener import WikiListener


def create_app():
    app = Flask(__name__)
    app.config.from_object(FlaskConfig())

    db.init_app(app)
    migrate.init_app(app, db)

    wiki_listener = WikiListener(app)

    # Without this condition, local running with hot reloading will duplicate the thread
    if (
        not (app.debug or environ.get("FLASK_ENV") == "development")
        or environ.get("WERKZEUG_RUN_MAIN") == "true"
    ):
        wiki_listener.start()

    if __name__ == "__main__":
        app.run(host="0.0.0.0", port=5000)

    return app
