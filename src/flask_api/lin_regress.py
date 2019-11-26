import numpy as np

def linRegression(data):
    x_ = np.array(data["x"], dtype='float')
    y = np.array(data["y"], dtype='float')

    A = np.ones((x_.shape[0], 2))
    A[:, 0] = x_
    
    x, residuals, _, _ = np.linalg.lstsq(A, y, rcond=None)
    m, b = np.round(x, 2)
    residual = np.round(residuals, 2)[0]

    x = np.linspace(np.min(x_), np.max(x_), 100)
    x = np.round(x, 2)
    y = np.round(m*x + b, 2)
    output_data = {
        "line_x": list(x),
        "line_y": list(y),
        "m": m,
        "b": b,
        "residual": residual
    }

    return output_data
