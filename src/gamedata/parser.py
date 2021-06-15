import os
import psycopg2
import csv
import json
from dotenv import load_dotenv
from sqlalchemy import Table, Column, MetaData, Integer, Computed


# Loading .env variables
dotenv_path_env = "../env/.env"
load_dotenv(dotenv_path_env)
environment = os.environ.get("env")
dotenv_path_real = "../env/"+ environment+"/.env"
load_dotenv(dotenv_path_real)
test = os.environ.get("DATABASE_HOST")

# Running through the COMPLETE gamedata (completeness field = complete)

connection = psycopg2.connect(
    host= os.environ.get("DATABASE_HOST"),
    database= os.environ.get("DATABASE_NAME"),
    user= os.environ.get("DATABASE_USER"),
    password=os.environ.get("DATABASE_PASSWORD"),
    port = 5433)

matches = []

with open('2014_LoL_esports_match_data_from_OraclesElixir_20210605.csv') as csv_file:
  csv_reader = csv.reader(csv_file, delimiter=',')
  line_count = 0
  match = {}
  for row in csv_reader:
    if line_count == 0:
      line_count += 1
    if row[6] != "1":
      match["PK_Match"] = row[0]
      match["TX_Match_URL"] = row[2]
      match["TX_League"] = row[3]
      match["NB_Year"] = row[4]
      match["TX_Split"] = row[5]
      match["DT_Date"] = row[7]
      match["TX_Patch"] = row[9]
      if line_count <= 6:
        if row[12] == "top":
          match["TX_Top_Team1"] = row[13]
          match["TX_Top_Champion_Team1"] = row[15]
          match["NB_Kills_Top_Team1"] = row[23]
          match["NB_Deaths_Top_Team1"] = row[24]
          match["NB_Assists_Top_Team1"] = row[26]
          match["NB_CS_Top_Team1"] = row[81]
          match["NB_Gold_Top_Team1"] = row[75]
        elif row[12] == "jng":
          match["TX_Jungle_Team1"] = row[13]
          match["TX_Jungle_Champion_Team1"] = row[15]
          match["NB_Kills_Jungle_Team1"] = row[23]
          match["NB_Deaths_Jungle_Team1"] = row[24]
          match["NB_Assists_Jungle_Team1"] = row[26]
          match["NB_CS_Jungle_Team1"] = row[81]
          match["NB_Gold_Jungle_Team1"] = row[75]
        elif row[12] == "mid":
          match["TX_Mid_Team1"] = row[13]
          match["TX_Mid_Champion_Team1"] = row[15]
          match["NB_Kills_Mid_Team1"] = row[23]
          match["NB_Deaths_Mid_Team1"] = row[24]
          match["NB_Assists_Mid_Team1"] = row[26]
          match["NB_CS_Mid_Team1"] = row[81]
          match["NB_Gold_Mid_Team1"] = row[75]
        elif row[12] == "bot":
          match["TX_ADC_Team1"] = row[13]
          match["TX_ADC_Champion_Team1"] = row[15]
          match["NB_Kills_ADC_Team1"] = row[23]
          match["NB_Deaths_ADC_Team1"] = row[24]
          match["NB_Assists_ADC_Team1"] = row[26]
          match["NB_CS_ADC_Team1"] = row[81]
          match["NB_Gold_ADC_Team1"] = row[75]
        elif row[12] == "sup":
          match["TX_Support_Team1"] = row[13]
          match["TX_Support_Champion_Team1"] = row[15]
          match["NB_Kills_Support_Team1"] = row[23]
          match["NB_Deaths_Support_Team1"] = row[24]
          match["NB_Assists_Support_Team1"] = row[26]
          match["NB_CS_Support_Team1"] = row[81]
          match["NB_Gold_Support_Team1"] = row[75]
      elif line_count > 6 and line_count <= 11:
        if row[12] == "top":
          match["TX_Top_Team2"] = row[13]
          match["TX_Top_Champion_Team2"] = row[15]
          match["NB_Kills_Top_Team2"] = row[23]
          match["NB_Deaths_Top_Team2"] = row[24]
          match["NB_Assists_Top_Team2"] = row[26]
          match["NB_CS_Top_Team2"] = row[81]
          match["NB_Gold_Top_Team2"] = row[75]
        elif row[12] == "jng":
          match["TX_Jungle_Team2"] = row[13]
          match["TX_Jungle_Champion_Team2"] = row[15]
          match["NB_Kills_Jungle_Team2"] = row[23]
          match["NB_Deaths_Jungle_Team2"] = row[24]
          match["NB_Assists_Jungle_Team2"] = row[26]
          match["NB_CS_Jungle_Team2"] = row[81]
          match["NB_Gold_Jungle_Team2"] = row[75]
        elif row[12] == "mid":
          match["TX_Mid_Team2"] = row[13]
          match["TX_Mid_Champion_Team2"] = row[15]
          match["NB_Kills_Mid_Team2"] = row[23]
          match["NB_Deaths_Mid_Team2"] = row[24]
          match["NB_Assists_Mid_Team2"] = row[26]
          match["NB_CS_Mid_Team2"] = row[81]
          match["NB_Gold_Mid_Team2"] = row[75]
        elif row[12] == "bot":
          match["TX_ADC_Team2"] = row[13]
          match["TX_ADC_Champion_Team2"] = row[15]
          match["NB_Kills_ADC_Team2"] = row[23]
          match["NB_Deaths_ADC_Team2"] = row[24]
          match["NB_Assists_ADC_Team2"] = row[26]
          match["NB_CS_ADC_Team2"] = row[81]
          match["NB_Gold_ADC_Team2"] = row[75]
        elif row[12] == "sup":
          match["TX_Support_Team2"] = row[13]
          match["TX_Support_Champion_Team2"] = row[15]
          match["NB_Kills_Support_Team2"] = row[23]
          match["NB_Deaths_Support_Team2"] = row[24]
          match["NB_Assists_Support_Team2"] = row[26]
          match["NB_CS_Support_Team2"] = row[81]
          match["NB_Gold_Support_Team2"] = row[75]	
      elif line_count == 12:
        match["TX_Side_Team1"] = row[11]
        match["FK_Team1"] = row[14]
        match["TX_Ban1_Team1"] = row[16]
        match["TX_Ban2_Team1"] = row[17]
        match["TX_Ban3_Team1"] = row[18]
        match["NB_Gamelength"] = row[21]
        if row[22] == "1":
          match["TX_Winner"] = row[14]
        match["NB_Kills_Team1"] = row[23]
      else:
        match["TX_Side_Team2"] = row[11]
        match["FK_Team2"] = row[14]
        match["TX_Ban1_Team2"] = row[16]
        match["TX_Ban2_Team2"] = row[17]
        match["TX_Ban3_Team2"] = row[18]
        match["NB_Gamelength"] = row[21]
        if row[22] == "1":
          match["TX_Winner"] = row[14]
        match["NB_Kills_Team2"] = row[23]
        matches.append(match)
        match = {}
        line_count = 0
      line_count += 1
  
with open('data.json', 'w') as outfile:
  json.dump(matches, outfile)