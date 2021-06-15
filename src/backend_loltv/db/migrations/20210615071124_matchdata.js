
exports.up = (knex) => Promise.all([
  knex.schema.createTable('TD_Match', (t) => {
    t.string('PK_Match').primary();
    t.date('DT_Match').notNullable();
    t.string('TX_League').notNullable();
    t.string('TX_Match_URL');
    t.integer('NB_Winner').notNullable();
    t.string('FK_Team1').notNullable();
    t.string('FK_Team2').notNullable();
    // t.bigInteger('TX_Winner').references('PK_Team').inTable('TD_Team').notNullable();
    // t.bigInteger('FK_Team1').references('PK_Team').inTable('TD_Team').notNullable();
    // t.bigInteger('FK_Team2').references('PK_Team').inTable('TD_Team').notNullable();
    t.integer('NB_Kills_Team1').notNullable();
    t.integer('NB_Kills_Team2').notNullable();
  }),

  // knex.schema.createTable('TD_Team', (t) => {
  //   t.bigIncrements('PK_Team').primary();
  //   t.string('TX_League').notNullable();
    
  // }),

  knex.schema.createTable('TD_Match_Metadata', (t) => {
    t.bigIncrements('PK_Match_MetaData').primary();
    t.date('DT_Match').notNullable();
    t.string('TX_Nationality').notNullable();
    t.string('TX_League').notNullable();
    t.string('TX_Match_URL');
    t.integer('NB_Winner').notNullable();
    t.string('FK_Team1').notNullable();
    t.string('FK_Team2').notNullable();
    t.integer('NB_Kills_Team1').notNullable();
    t.integer('NB_Kills_Team2').notNullable();

    t.string('TX_Top_Team1').notNullable();
    t.string('TX_Jungle_Team1').notNullable();
    t.string('TX_Mid_Team1').notNullable();
    t.string('TX_ADC_Team1').notNullable();
    t.string('TX_Support_Team1').notNullable();

    t.integer('NB_Kills_Top_Team1').notNullable();
    t.integer('NB_Deaths_Top_Team1').notNullable();
    t.integer('NB_Assists_Top_Team1').notNullable();
    t.integer('NB_CS_Top_Team1').notNullable();
    t.integer('NB_Gold_Top_Team1').notNullable();

    t.integer('NB_Kills_Jungle_Team1').notNullable();
    t.integer('NB_Deaths_Jungle_Team1').notNullable();
    t.integer('NB_Assists_Jungle_Team1').notNullable();
    t.integer('NB_CS_Jungle_Team1').notNullable();
    t.integer('NB_Gold_Jungle_Team1').notNullable();

    t.integer('NB_Kills_Mid_Team1').notNullable();
    t.integer('NB_Deaths_Mid_Team1').notNullable();
    t.integer('NB_Assists_Mid_Team1').notNullable();
    t.integer('NB_CS_Mid_Team1').notNullable();
    t.integer('NB_Gold_mid_Team1').notNullable();

    t.integer('NB_Kills_ADC_Team1').notNullable();
    t.integer('NB_Deaths_ADC_Team1').notNullable();
    t.integer('NB_Assists_ADC_Team1').notNullable();
    t.integer('NB_CS_ADC_Team1').notNullable();
    t.integer('NB_Gold_ADC_Team1').notNullable();

    t.integer('NB_Kills_Support_Team1').notNullable();
    t.integer('NB_Deaths_Support_Team1').notNullable();
    t.integer('NB_Assists_Support_Team1').notNullable();
    t.integer('NB_CS_Support_Team1').notNullable();
    t.integer('NB_Gold_Support_Team1').notNullable();
    
    t.string('TX_Top_Team2').notNullable();
    t.string('TX_Jungle_Team2').notNullable();
    t.string('TX_Mid_Team2').notNullable();
    t.string('TX_ADC_Team2').notNullable();
    t.string('TX_Support_Team2').notNullable();

    t.integer('NB_Kills_Top_Team2').notNullable();
    t.integer('NB_Deaths_Top_Team2').notNullable();
    t.integer('NB_Assists_Top_Team2').notNullable();
    t.integer('NB_CS_Top_Team2').notNullable();
    t.integer('NB_Gold_Top_Team2').notNullable();

    t.integer('NB_Kills_Jungle_Team2').notNullable();
    t.integer('NB_Deaths_Jungle_Team2').notNullable();
    t.integer('NB_Assists_Jungle_Team2').notNullable();
    t.integer('NB_CS_Jungle_Team2').notNullable();
    t.integer('NB_Gold_Jungle_Team2').notNullable();

    t.integer('NB_Kills_Mid_Team2').notNullable();
    t.integer('NB_Deaths_Mid_Team2').notNullable();
    t.integer('NB_Assists_Mid_Team2').notNullable();
    t.integer('NB_CS_Mid_Team2').notNullable();
    t.integer('NB_Gold_mid_Team2').notNullable();

    t.integer('NB_Kills_ADC_Team2').notNullable();
    t.integer('NB_Deaths_ADC_Team2').notNullable();
    t.integer('NB_Assists_ADC_Team2').notNullable();
    t.integer('NB_CS_ADC_Team2').notNullable();
    t.integer('NB_Gold_ADC_Team2').notNullable();

    t.integer('NB_Kills_Support_Team2').notNullable();
    t.integer('NB_Deaths_Support_Team2').notNullable();
    t.integer('NB_Assists_Support_Team2').notNullable();
    t.integer('NB_CS_Support_Team2').notNullable();
    t.integer('NB_Gold_Support_Team2').notNullable();
    
  }),
]);


exports.down = (t) => {
  t.dropColumn('TD_Match');
  t.dropColumn('TD_Team');
  t.dropColumn('TD_Match_Metadata');

};
