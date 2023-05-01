import pandas

from models import db


def load_data():
    return pandas.read_sql_table("edit_event", con=db.session.connection().engine, parse_dates=["created"])


def calculate_stats() -> dict:
    data = load_data()
    return {
        "editCount": len(data.index),
    }
