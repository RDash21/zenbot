module.exports = {
  _ns: 'zenbrain',
  'mappers.rsi_backfiller': require('./backfiller'),
  'mappers[]': '#mappers.rsi_backfiller',
  'reporter_cols.rsi': require('./reporter_col'),
  'tick_reducers[10]': require('./tick_reducer')
}