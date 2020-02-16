import numpy as np
from numpy.linalg import eig, inv

def getGaussianData(m, C, n=1000):
    x = np.random.multivariate_normal(m, C, n)
    return x

def getLine(means, w, T=10, N=2):
    m = np.array(means).astype(np.float64).mean(axis=0)
    p = np.outer(np.ones(N), m).T
    t = np.linspace(0, T, N)
    v = np.outer(np.ones(N), w).T
    line1 = p + v * (t - T)
    line2 = p + v * (T - t)
    line = np.concatenate((line1[:, :-1], line2[:, ::-1]), axis=1)
    line = line[:, [0, -1]]
    return line

def topK_Eig(M, k):
    evals, U = eig(M)
    idx = np.argsort(evals)[::-1][:k]
    evals = evals[idx]
    U = U[:, idx]
    return evals, U

def computeDiscriminant(means, covarianceMatrices):
    M = np.array(means).astype(np.float64).T
    m0 = M.mean(axis=1, keepdims=True)
    M -= m0
    S_W = sum(covarianceMatrices).astype(np.float64)
    S_B = M @ M.T
    evals, U = topK_Eig(inv(S_W) @ S_B, 1)
    w = U[:, 0]
    return w

def lda(data):
    means = data["means"]
    covMats = data["covarianceMatrices"]

    if len(means) != len(covMats) or len(means) == 0:
        return {
            'points': points,
            'line': line
        }

    points = []
    for label, pair in enumerate(zip(means, covMats)):
        m, C = pair
        pts = getGaussianData(m, C, N=1000)
        for idx in range(pts.shape[0]):
            points.append({
                'x': pts[i, 0],
                'y': pts[i, 1],
                'label': label
            })
    
    w = computeDiscriminant(means, covarianceMatrices)
    line = getLine(means, w, T=10, N=2)
    line = [{'x': line[0, i], 'y': line[1, i]} for i in range(line.shape[1])]

    output_data = {
            'points': points,
            'line': line
    }

    return output_data
