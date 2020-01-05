import numpy as np
from sklearn.cluster import KMeans

def makeLine(xx, yy):
    leftPoint = {'x': xx[0], 'y': np.round(yy[0], 4)}
    rightPoint = {'x': xx[1], 'y': np.round(yy[1], 4)}
    return leftPoint, rightPoint


def getColors(clf, xx, yy_up, yy_down):
    colors = ['#000000']
    predicted = clf.predict([[xx[0], yy_up[0]]])
    if np.max(predicted) == 1:
        colors.append('#FF0000')
    else:
        colors.append('#0000FF')

    predicted = clf.predict([[xx[0], yy_down[0]]])
    if np.max(predicted) == 1:
        colors.append('#FF0000')
    else:
        colors.append('#0000FF')
    
    return colors


def kmeans(data):
    x = np.array(data["x"], dtype='float')
    y = np.array(data["y"], dtype='float')

    if len(x) == 0:
        return {
            'centroids': [],
            'points': []
        }

    k = int(data['k'])
    D = np.array([x, y]).T
    k = min(k, D.shape[0])
    clf = KMeans(n_clusters=k).fit(D)
    labels, centroids = clf.labels_, clf.cluster_centers_
    
    output_data = {
        'centroids': [{'x': centroids[i, 0], 'y': centroids[i, 1], 'label': i} for i in range(len(centroids))],
        'points': [{'x': D[i, 0], 'y': D[i, 1], 'label': int(labels[i])} for i in range(len(labels))]
    }

    print(output_data)

    return output_data
