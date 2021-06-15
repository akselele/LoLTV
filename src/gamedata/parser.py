import os
import psycopg2
import csv
from dotenv import load_dotenv
from sqlalchemy import Table, Column, MetaData, Integer, Computed


# Loading .env variables
dotenv_path_env = "../env/.env"
load_dotenv(dotenv_path_env)
environment = os.environ.get("env")
dotenv_path_real = "../env/"+ environment+"/.env"
load_dotenv(dotenv_path_real)
test = os.environ.get("DATABASE_HOST")
print(test)

# Running through the COMPLETE gamedata (completeness field = complete)

connection = psycopg2.connect(
    host= os.environ.get("DATABASE_HOST"),
    database= os.environ.get("DATABASE_NAME"),
    user= os.environ.get("DATABASE_USER"),
    password=os.environ.get("DATABASE_PASSWORD"),
    port = 5433)

with open('2014_LoL_esports_match_data_from_OraclesElixir_20210605(1).csv') as csv_file:
  csv_reader = csv.reader(csv_file, delimiter=',')
  line_count = 0
  for row in csv_reader:
    if line_count == 0:
      print(f'Column names are: {",".join(row)}')
      line_count += 1
    else:
      print(f'\t{row[0]} works in the {row[1]} department, and was born in {row[2]}.')
      line_count += 1
  print(f'Processed {line_count} lines.')