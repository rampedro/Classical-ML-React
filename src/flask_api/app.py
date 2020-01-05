from modules.lin_regress import linRegression
from modules.svm import svm
from modules.kmeans import kmeans
from flask import Flask, request, jsonify

app = Flask(__name__)
services = {
    'svm': svm,
    'lin_regress': linRegression,
    'kmeans': kmeans
}

@app.route('/<string:service_name>', methods=['PUT'])
def service(service_name):
    try:
        service_func = services[service_name]
    except:
        # service does not exist
        return None, 401
    
    data = request.get_json()
    output_data = service_func(data)
    return jsonify(output_data)


if __name__ == "__main__":
    app.run(debug=True)