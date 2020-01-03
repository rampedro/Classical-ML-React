import numpy as np
from sklearn.svm import SVC

def makeLine(x1, x2, m, b):
    leftPoint = {'x': x1, 'y': np.round(m*x1 + b, 4)}
    rightPoint = {'x': x2, 'y': np.round(m*x2 + b, 4)}
    return leftPoint, rightPoint

def transformLine(leftPoint, rightPoint, mean, std):
    M = np.array([
        [leftPoint['x'], leftPoint['y']],
        [rightPoint['x'], rightPoint['y']]
    ])
    M = (M + mean) * std
    newLeftPoint = {'x': M[0, 0], 'y': M[0, 1]}
    newRightPoint = {'x': M[1, 0], 'y': M[1, 1]}

    return newLeftPoint, newRightPoint

def svm(data, eps=1e-3):
    if len(data['x']) == 0:
        return {
            "pts": [{"x": 0, "y": 0}, {"x": 0, "y": 0}],
            "accuracy": 'N/A'
        }

    x = np.array(data["x"], dtype='float')
    y = np.array(data["y"], dtype='float')
    D = np.array([x, y]).T
    #mean = np.mean(D, axis=0, keepdims=True)
    #std = np.std(D, axis=0, keepdims=True) + eps
    #D = (D - mean) / std
    labels = np.array(data["labels"], dtype=np.int32)
    uniqueLabels = np.unique(labels)
    if len(uniqueLabels) != 2:
        return {
            "pts": [{"x": 0, "y": 0}, {"x": 0, "y": 0}],
            "accuracy": 'N/A'
        }

    clf = SVC(kernel='linear')
    clf.fit(D, labels)
    acc = 100 * np.sum(clf.predict(D) == labels) / labels.shape[0]
    acc = np.round(acc, 2)

    w = clf.coef_[0]
    m = -w[0] / (w[1] + eps)
    b = -clf.intercept_[0] / (w[1] + eps)

    x1 = np.floor(np.min(x)) - 1
    x2 = np.ceil(np.max(x)) + 1
    
    leftPoint, rightPoint = makeLine(x1, x2, m, b)
    
    output_data = {
        "pts": [leftPoint, rightPoint],
        "accuracy": f'{acc}%'
    }

    return output_data
