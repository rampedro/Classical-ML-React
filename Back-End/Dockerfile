FROM python:3.8
EXPOSE 5000
ENV FLASK_APP=app.py
ENV FLASK_RUN_HOST=0.0.0.0
#RUN apk add --no-cache gcc musl-dev linux-headers
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt
COPY data data
COPY data/covid-variants.csv data/covid-variants.csv
COPY . .
CMD ["flask", "run"]