from datetime import datetime

from flask_socketio import SocketIO

from models.edit_event import EditEvent


socketio = SocketIO()


def calculate_stats() -> dict:
    return {
        "count": EditEvent.query.count()
    }


def broadcast_stats():
    socketio.emit('stats', {
        "time": datetime.now().isoformat(),
        "data": calculate_stats()
    })
