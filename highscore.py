from flask import Blueprint, request, jsonify
import json
import os

bp = Blueprint('highscore', __name__)
HIGHSCORE_FILE = 'highscore.json'

def read_highscore():
    if not os.path.exists(HIGHSCORE_FILE):
        return None
    with open(HIGHSCORE_FILE, 'r') as f:
        try:
            data = json.load(f)
            return data.get("highScore", None)
        except:
            return None

def write_highscore(score):
    with open(HIGHSCORE_FILE, 'w') as f:
        json.dump({"highScore": score}, f)

@bp.route('/highscore', methods=['GET'])
def get_highscore():
    score = read_highscore()
    if score is None:
        score = "--"
    return jsonify({"highScore": score})

@bp.route('/highscore', methods=['POST'])
def update_highscore():
    data = request.get_json()
    tries = data.get('tries')
    current = read_highscore()
    if current is None or current == "--" or (isinstance(current, int) and tries < current):
        write_highscore(tries)
        new_score = tries
    else:
        new_score = current
    return jsonify({"highScore": new_score})
