from flask import jsonify
import os

class APIException(Exception):
    def __init__(self, message, status_code=400):
        super().__init__()
        self.message = message
        self.status_code = status_code

    def to_dict(self):
        return {"message": self.message, "status_code": self.status_code}

def generate_sitemap(app):
    output = []
    for rule in app.url_map.iter_rules():
        if "GET" in rule.methods:
            url = os.path.join(rule.rule)
            output.append(url)
    return jsonify(output)
