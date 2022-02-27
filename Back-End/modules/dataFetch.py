
def dataFetch(a):
    import json
    import pandas as pd
    df = pd.read_csv('/Users/book/Desktop/javascript/remlf3/Classical-ML-React/Back-End/data/covid-variants.csv')
    
    res = df.groupby(by='variant')['num_sequences'].sum().sort_values(ascending=False)


    # Fetch lists one as key one as value, to a dictionary.

    output_data = {"_value":list(res),"_key":list(res.keys())}
    return output_data

