import numpy as np
from sklearn_extra.cluster import KMedoids


def kmedoids(data):
    x = np.array(data["x"], dtype='float')
    y = np.array(data["y"], dtype='float')

    if len(x) == 0:
        return {
            'centroids': [],
            'points': []
        }

    k = int(data['k'])
    metric = data['metric']

    D = np.array([x, y]).T
    k = min(k, D.shape[0])
    clf = KMedoids(n_clusters=k, metric=metric).fit(D)
    labels, centroids = clf.labels_, clf.cluster_centers_
    
    output_data = {
        'centroids': [{'x': centroids[i, 0], 'y': centroids[i, 1], 'label': i} for i in range(len(centroids))],
        'points': [{'x': D[i, 0], 'y': D[i, 1], 'label': int(labels[i])} for i in range(len(labels))]
    }

    return output_data
