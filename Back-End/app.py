from modules.lin_regress import linRegression
from modules.test import testing
from modules.dataFetch import dataFetch
from flask import Flask, request, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)

services = {
    'lin_regress': linRegression,
    'testing': testing,
    'dataFetch': dataFetch
}

cors = CORS(app, resources={
    r'/{}'.format(service): {"origins": "*"} for service in services
})


@app.route('/<string:service_name>', methods=['GET', 'POST'])
def service(service_name):
    try:
        service_func = services[service_name]
    except:
        # service does not exist
        return None, 401

    data = request.get_json()
    output_data = service_func(data)
    output_data = json.dumps(output_data)
    return output_data


if __name__ == "__main__":
    app.run(debug=True)
