from models import db


MaxLength = 300


class EditEvent(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    page_title = db.Column(db.String(MaxLength))
    change_size = db.Column(db.Integer)
    is_anon = db.Column(db.Boolean)
    is_bot = db.Column(db.Boolean)
    is_minor = db.Column(db.Boolean)
    is_new = db.Column(db.Boolean)
    is_unpatrolled = db.Column(db.Boolean)
    user = db.Column(db.String(MaxLength))
    city = db.Column(db.String(MaxLength))
    country = db.Column(db.String(MaxLength))
    region = db.Column(db.String(MaxLength))
