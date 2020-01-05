from lin_regress import linRegression
from svm import svm
from kmeans import kmeans
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/lin_regress', methods=['PUT'])
def linearRegression():
    data = request.get_json()
    output_data = linRegression(data)
    return jsonify(output_data)

@app.route('/svm', methods=['PUT'])
def SVM():
    data = request.get_json()
    output_data = svm(data)
    return jsonify(output_data)

@app.route('/kmeans', methods=['PUT'])
def KMeans():
    data = request.get_json()
    output_data = kmeans(data)
    return jsonify(output_data)

if __name__ == "__main__":
    app.run(debug=True)