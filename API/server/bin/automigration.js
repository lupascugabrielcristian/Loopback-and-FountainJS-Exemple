var app = require('../server');

// this loads the accountDb configuration in ~/server/datasources.json
var dataSource = app.dataSources.elephant;

// this automigrates the model
dataSource.automigrate('Topic', function(err) {
  if (err) throw err;
  dataSource.disconnect();
});

dataSource.automigrate('Link', function(err) {
  if (err) throw err;
  dataSource.disconnect();
});
