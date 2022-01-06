def readdata(a):
    import pandas as pd
    df = pd.read_csv('/Users/book/Desktop/javascript/remlf3/Classical-ML-React/Back-End/data/covid-variants.csv')
    output_data = df.groupby(by='location')['num_sequences_total'].sum().sort_values(ascending=False).head()
    output_data = output_data.to_json()
    
    return output_data