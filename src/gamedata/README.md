All the gamedata from past (2014-2021 including spring splits) games are from [oracleselixir](https://oracleselixir.com/tools/downloads)

head ./2014_LoL_esports_match_data_from_OraclesElixir_20210605.csv -n 1 | sed "s/,/\n/g" | awk '{printf("%d %s\n", NR-1, $0)}'