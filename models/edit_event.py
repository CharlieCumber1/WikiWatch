import json
from datetime import datetime

from helpers.exceptions import UnexpectedActionException
from helpers.time_zones import datetime_to_utc
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
    created = db.Column(db.DateTime(timezone=True))

    @classmethod
    def from_wiki_message(cls, raw_message):
        message = json.loads(raw_message)

        action_type = message.get("action")
        if action_type != "edit":
            raise UnexpectedActionException(expected="edit", actual=action_type)

        geo_data = message.get("geo_ip")

        return cls(
            page_title=message.get("page_title"),
            change_size=message.get("change_size"),
            is_anon=message.get("is_anon"),
            is_bot=message.get("is_bot"),
            is_new=message.get("is_new"),
            is_minor=message.get("is_minor"),
            is_unpatrolled=message.get("is_unpatrolled"),
            user=message.get("user") if not message.get("is_anon") else None,
            city=geo_data.get("city") if geo_data else None,
            country=geo_data.get("country_name") if geo_data else None,
            region=geo_data.get("region_name") if geo_data else None,
        )

    def save(self) -> None:
        if self.id is None:
            self.created = datetime_to_utc(datetime.now())
            db.session.add(self)
        db.session.commit()
