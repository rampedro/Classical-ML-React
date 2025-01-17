import numpy as np

def testing(data):
    if len(data['x']) == 0:
        return {
            "pts": [{"x": 0, "y": 0}, {"x": 0, "y": 0}],
            "m": 0,
            "b": 0,
            "residual": 0
        }

    x_ = np.array(data["x"], dtype='float')
    y = np.array(data["y"], dtype='float')

    A = np.ones((x_.shape[0], 2))
    A[:, 0] = x_
    
    x, residuals, _, _ = np.linalg.lstsq(A, y, rcond=None)
    m, b = np.round(x, 2)
    residual = np.round(np.sum(residuals), 2)

    leftPoint = np.floor(np.min(x_))
    leftPoint = {"x": leftPoint, "y": m*leftPoint + b}
    rightPoint = np.ceil(np.max(x_))
    rightPoint = {"x": rightPoint, "y": m*rightPoint + b}

    x = np.round(x, 2)
    y = np.round(m*x + b, 2)
    output_data = {
        "bestFitLine": [leftPoint, rightPoint],
        "m": m,
        "b": b,
        "residual": residual
    }

    return output_data



def pp():
    import pandas as pd
    df = pd.read_csv('/Users/book/Desktop/javascript/remlf3/Classical-ML-React/Back-End/data/covid-variants.csv')
    output_data = df.groupby(by='location')['num_sequences_total'].sum().sort_values(ascending=False).head()
    output_data = output_data.to_json()
    print(output_data)

