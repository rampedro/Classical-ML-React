from modules.lin_regress import linRegression
from modules.svm import svm
from modules.kmeans import kmeans
from modules.kmedoids import kmedoids
from modules.lda import lda
from modules.test import testing
from modules.readdata import readdata
from flask import Flask, request, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)

services = {
    'svm': svm,
    'lin_regress': linRegression,
    'kmeans': kmeans,
    'kmedoids': kmedoids,
    'lda': lda,
    'testing' : testing,
    'readdata' : readdata
}

cors = CORS(app, resources={
    r'/{}'.format(service): {"origins": "*"} for service in services
})




@app.route('/<string:service_name>', methods=['GET','POST'])
def service(service_name):
    try:
        service_func = services[service_name]
    except:
        # service does not exist
        return None, 401
    
    data = request.get_json()
    output_data = service_func(data)
    serializeddata = json.dumps(output_data)
    return serializeddata


if __name__ == "__main__":
    app.run(debug=True)
