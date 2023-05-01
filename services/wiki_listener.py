import asyncio
import threading

import websockets

from helpers.exceptions import UnexpectedActionException
from models.edit_event import EditEvent
from sockets import broadcast_stats


class WikiListener(threading.Thread):
    def __init__(self, app):
        super().__init__()
        self.app = app

    @staticmethod
    async def handle() -> None:
        while True:
            async with websockets.connect("ws://wikimon.hatnote.com:9000") as ws:
                message = await ws.recv()
                try:
                    EditEvent.from_wiki_message(message).save()
                    broadcast_stats()

                except UnexpectedActionException:
                    pass

    def run(self) -> None:
        with self.app.app_context():
            asyncio.new_event_loop().run_until_complete(self.handle())
