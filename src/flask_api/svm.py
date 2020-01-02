import numpy as np
from sklearn.svm import SVC

def svm(data):
    if len(data['x']) == 0:
        return {
            "pts": [{"x": 0, "y": 0}, {"x": 0, "y": 0}],
            "accuracy": 'N/A'
        }

    x = np.array(data["x"], dtype='float')
    y = np.array(data["y"], dtype='float')
    D = np.array([x, y]).T
    labels = np.array(data["labels"], dtype=np.int32)

    clf = SVC(gamma='auto')
    clf.fit(D, labels)
    acc = 100 * np.sum(clf.predict(D) == labels) / labels.shape[0]
    acc = np.round(acc, 2)
    
    output_data = {
        "pts": [{"x": 0, "y": 0}, {"x": 0, "y": 0}],
        "accuracy": acc
    }

    return output_data
