import pytz
from datetime import datetime


def datetime_is_time_zone_aware(value: datetime):
    return value.tzinfo is not None and value.tzinfo.utcoffset(value) is not None


def datetime_to_utc(value: datetime) -> datetime:
    return (
        value.astimezone(tz=pytz.UTC)
        if datetime_is_time_zone_aware(value)
        else value.replace(tzinfo=pytz.UTC)
    )
