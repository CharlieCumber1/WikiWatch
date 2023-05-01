class UnexpectedActionException(Exception):
    def __init__(self, expected: str, actual: str):
        self.message = (
            f"WikiMon event action of type '{actual}' when '{expected}' was expected"
        )
        super().__init__(self.message)
