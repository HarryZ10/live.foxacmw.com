
// hz: Loads the favicons that require context
const faviconsContext = require.context(
  '!!file-loader?name=assets/favicons/favicon.ico!.',
  true,
  /\.(svg|png|ico|xml|json)$/
);

// hz: this gets the favicons depending on the environment
faviconsContext.keys().forEach(faviconsContext);
