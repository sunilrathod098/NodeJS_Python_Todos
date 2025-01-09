from flask import Flask, request, jsonify
from flask_cors import CORS
from password_handler import hasd_password, verify_password


app = Flask(__name__)
CORS(app)


#routes endpoints

@app.route('/hash', methods=['POST'])
def hash_route():
    data = request.json
    password = data.get('password')
    if not password:
        return jsonify({'error': 'Password is required'}), 400
    hashed_password = hasd_password(password)
    return jsonify({'hashedPassword': hashed_password})


@app.route('/verify', methods=['POST'])
def verify_route():
    data = request.json
    password = data.get('password')
    hashed_password = data.get('hashedPassword')
    if not password or not hashed_password:
        return jsonify({'error': 'Password and hashedPassword is required'}), 400
    valid = verify_password(password, hashed_password)
    return jsonify({'valid':valid})

#here runs on port 5000 and communicates with the Node.js server via HTTP requests (using axios)

if __name__ == '__main__':
    app.run(debug=True, port=5000)
    
