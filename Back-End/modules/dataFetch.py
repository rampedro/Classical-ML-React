
def dataFetch(a):
    import json
    import pandas as pd
    df = pd.read_csv('/Users/book/Desktop/javascript/remlf3/Classical-ML-React/Back-End/data/covid-variants.csv')
    
    res = df.groupby(by='location')['num_sequences_total'].sum().sort_values(ascending=False)
    output_data = {"count":list(res),"loc":list(res.keys())}
    return output_data

