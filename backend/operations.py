import json
import re

def autoFill(searchStr, stores):
    result = []
    for s in stores:
        if re.search(searchStr, s["name"], re.IGNORECASE):
            result.append(s)
        elif re.search(searchStr, s["tags"], re.IGNORECASE):
            result.append(s)
    return { "result": result }

# format:
# stores = [
#     {"id": 1, "name": "Buffalo", "tags": "gen3, northeast"},]


# How to match a substr in a str
# https://stackoverflow.com/questions/6579876/how-to-match-a-substring-in-a-string-ignoring-case?rq=1