export default class MatchRepository {
  constructor({ knex }) {
    this.db = knex;
    this.DATA_TABLE = 'TD_Match';
  }

  getMsiMatches() {
    return this.db(this.DATA_TABLE)
      .select(
        'PK_Match as id',
        'DTT_Match as date',
        'TX_Match_URL as matchUrl',
        'NB_Game as nbGames',
        'NB_Year as year',
        'TX_Winner as winner',
        'FK_Team1 as team1',
        'FK_Team2 as team2',
        'NB_Kills_Team1 as t1Kills',
        'NB_Kills_Team2 as t2Kills',
      )
      .where('NB_Year', '=', 2021)
      .andWhere('TX_League', '=', 'MSI')
      .orderBy('DTT_Match', 'desc');
  }
}
