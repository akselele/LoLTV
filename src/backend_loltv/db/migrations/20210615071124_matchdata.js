
exports.up = (knex) => Promise.all([

  knex.schema.createTable('TD_Match', (t) => {
    t.string('PK_Match').primary();
    t.timestamp('DTT_Match').notNullable();
    t.string('TX_League').notNullable();
    t.string('TX_Match_URL');
    t.boolean('BOOL_Playoffs');
    t.integer('NB_Game');
    t.integer('NB_Year');
    t.string('TX_Split');
    t.string('TX_Patch');
    t.string('TX_Winner');
    t.string('FK_Team1').notNullable();
    t.string('FK_Team2').notNullable();
    t.integer('NB_Kills_Team1').notNullable();
    t.integer('NB_Kills_Team2').notNullable();
    t.bigInteger('NB_Gamelength');
    t.string('TX_Side_Team1');
    t.string('TX_Side_Team2');
    t.string('TX_Ban1_Team1');
    t.string('TX_Ban2_Team1');
    t.string('TX_Ban3_Team1');
    t.string('TX_Ban4_Team1');
    t.string('TX_Ban5_Team1');
    t.string('TX_Ban1_Team2');
    t.string('TX_Ban2_Team2');
    t.string('TX_Ban3_Team2');
    t.string('TX_Ban4_Team2');
    t.string('TX_Ban5_Team2');
    t.string('TX_Top_Team1').notNullable();
    t.string('TX_Top_Champion_Team1').notNullable();
    t.string('TX_Jungle_Team1').notNullable();
    t.string('TX_Jungle_Champion_Team1').notNullable();
    t.string('TX_Mid_Team1').notNullable();
    t.string('TX_Mid_Champion_Team1').notNullable();
    t.string('TX_ADC_Team1').notNullable();
    t.string('TX_ADC_Champion_Team1').notNullable();
    t.string('TX_Support_Team1').notNullable();
    t.string('TX_Support_Champion_Team1').notNullable();
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
    t.integer('NB_Gold_Mid_Team1').notNullable();
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
    t.string('TX_Top_Champion_Team2').notNullable();
    t.string('TX_Jungle_Team2').notNullable();
    t.string('TX_Jungle_Champion_Team2').notNullable();
    t.string('TX_Mid_Team2').notNullable();
    t.string('TX_Mid_Champion_Team2').notNullable();
    t.string('TX_ADC_Team2').notNullable();
    t.string('TX_ADC_Champion_Team2').notNullable();
    t.string('TX_Support_Team2').notNullable();
    t.string('TX_Support_Champion_Team2').notNullable();
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
    t.integer('NB_Gold_Mid_Team2').notNullable();
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

exports.down = (knex) => {
  return Promise.all([
    knex.schema.dropTable('TD_Match'),
    // knex.schema.dropTable('TD_Team'),
    knex.schema.dropTable('TD_Match_Metadata'),
  ]);
};
