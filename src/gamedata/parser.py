import os
from typing import final
import psycopg2
import csv
import json
import glob
from dotenv import load_dotenv
from psycopg2.extras import execute_values
from psycopg2 import connect, sql


# Loading .env variables
dotenv_path_env = "../env/.env"
load_dotenv(dotenv_path_env)
environment = os.environ.get("env")
dotenv_path_real = "../env/"+ environment+"/.env"
load_dotenv(dotenv_path_real)
test = os.environ.get("DATABASE_HOST")

# Running through the gamedata

matches = []
dirpath = os.path.dirname(os.path.realpath(__file__)) + "/*.csv"

matchIds = []
matchez = {}
currentInts = 0
# These were all tests to check for wrong data
# for file_name in glob.glob(dirpath):
#   file = open(file_name, encoding="cp437")
#   listFile = file.readlines()
#   print(f'{(len(listFile)-1)/12} - {file_name}')

# with open("2018_LoL_esports_match_data_from_OraclesElixir_20210605.csv", encoding="cp437") as csv_file2:
#   csv_reader2 = csv.reader(csv_file2, delimiter=',')
#   count = 0
#   for row in csv_reader2:
#     if count == 0:
#       count += 1
#     elif row[0] not in matchIds:
#       matchIds.append(row[0])
#       matchez[row[0]] = 1
#     else:
#       matchIds.append(row[0])
#       matchez[row[0]] += 1

# # print(matchez)
# wrongmatches = []
# for k,v in matchez.items():
#   if v != 12:
#     wrongmatches.append(k)
  
# print(wrongmatches)



for file_name in glob.glob(dirpath):
  gamesPerFile = 0
  with open(file_name, encoding="cp437") as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=',')
    line_count = 0
    gamesExtracted = 0
    match = {}
    current_id = ""
    for row in csv_reader:
      if line_count == 0:
        print(f'Extracting from {csv_file.name}')
      if current_id != row[0] and match != {}:
        matches.append(match)
        match = {}
        line_count = 1
        current_id = row[0]
        gamesExtracted += 1
      if line_count != 0:
        match["PK_Match_MetaData"] = row[0]
        match["TX_Match_URL"] = row[2]
        match["TX_League"] = row[3]
        match["NB_Year"] = row[4]
        match["TX_Split"] = row[5]
        match["DT_Match"] = row[7]
        match["TX_Patch"] = row[9]
        match["NB_Gamelength"] = row[21]
      if line_count < 6: 
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
      elif line_count >= 6 and line_count < 11:
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
      elif line_count == 11:
        match["TX_Side_Team1"] = row[11]
        match["FK_Team1"] = row[14]
        match["TX_Ban1_Team1"] = row[16]
        match["TX_Ban2_Team1"] = row[17]
        match["TX_Ban3_Team1"] = row[18]
        match["TX_Ban4_Team1"] = row[19]
        match["TX_Ban5_Team1"] = row[20]
        match["NB_Kills_Team1"] = row[23]
        if row[22] == "1":
          match["TX_Winner"] = row[14]
      else:
        match["TX_Side_Team2"] = row[11]
        match["FK_Team2"] = row[14]
        match["TX_Ban1_Team2"] = row[16]
        match["TX_Ban2_Team2"] = row[17]
        match["TX_Ban3_Team2"] = row[18]
        match["TX_Ban4_Team2"] = row[19]
        match["TX_Ban5_Team2"] = row[20]
        match["NB_Kills_Team2"] = row[23]
        if row[22] == "1":
          match["TX_Winner"] = row[14]
      current_id = row[0]
      line_count += 1
      gamesPerFile += 1
    matches.append(match)
    gamesExtracted += 1
    print(f'{(gamesPerFile-1)/12} matches in {csv_file.name}, {gamesExtracted} matches extracted')

wrongMatchIds = []
for i in matches:
  if len(i) != 95:
    wrongMatchIds.append(i)

# with open('incompleteMatchIds.json', 'w') as outfile:
#       json.dump(wrongMatchIds, outfile)

if len(wrongMatchIds) > 0:
  print(f'There are {len(wrongMatchIds)} games with incomplete data.')
else:
  print("All games are complete.")
 


# Inserting into db

connection = psycopg2.connect(
    host= os.environ.get("DATABASE_HOST"),
    database= os.environ.get("DATABASE_NAME"),
    user= os.environ.get("DATABASE_USER"),
    password=os.environ.get("DATABASE_PASSWORD"),
    port = 5433)

cursor = connection.cursor()

#TODO: Correct the missing data (like bo5 blind picks in LCK/LPL where a role is missing)
missedMatches = []
for match in matches:
  try:
    keys = match.keys()
    columns = ','.join(f'"{k}"'for k in keys)
    values = ','.join(['%({})s'.format(k) for k in keys])
    insert = 'insert into \"TD_Match_Metadata\" ({0}) values ({1})'.format(columns, values)
    query = cursor.mogrify(insert, match)
    cursor.execute(query)
    connection.commit()
  except:
    connection.rollback()
    missedMatches.append(match["PK_Match_MetaData"])


