export default class MatchRepository {
  constructor({ knex }) {
    this.db = knex;
    this.DATA_TABLE = 'TD_Match';
  }

  getMsiGames() {
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
        'NB_Kills_Team1 as kills_t1',
        'NB_Kills_Team2 as kills_t2',
        'TX_League as league',
      )
      .where('NB_Year', '=', 2021)
      .andWhere('TX_League', '=', 'MSI')
      .orderBy('DTT_Match', 'desc');
  }

  getGameById(id) {
    return this.db(this.DATA_TABLE)
      .where('PK_Match', '=', id)
      .first();
  }

  getShortGameById(id) {
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
        'NB_Kills_Team1 as kills_t1',
        'NB_Kills_Team2 as kills_t2',
        'TX_League as league',
      )
      .where('PK_Match', '=', id)
      .first();
  }
}
