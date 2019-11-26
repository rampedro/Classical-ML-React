from lin_regress import linRegression
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/lin_regress', methods=['PUT'])
def linearRegression():
    data = request.get_json()
    output_data = linRegression(data)
    return jsonify(output_data)

if __name__ == "__main__":
    app.run(debug=True)