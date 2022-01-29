import sys

def readdata(a):
    import pandas as pd
    path = "covid-variants.csv"
    df = pd.read_csv(path)
    output_data = df.groupby(by='location')['num_sequences_total'].sum().sort_values(ascending=False).head()
    output_data = output_data.to_json()
    
    return output_data