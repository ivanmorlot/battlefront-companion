let express = require('express');
let app = express();
const middleware = require('./app.middleware');
const apiV1 = require('./api/v1');
const db = require('./db');

// Create DB connection
db.createDbConnection();
let dbConnection = db.getDbConnection();
dbConnection.on('error', db.onError);
dbConnection.once('open', db.onSuccess);

// Express middleware
middleware.setMiddleware(app);

// API configuration
app.use('/api/v1/', apiV1);

// Additional routes
app.use('*', (req, res) => {
  res.status(404).send('Endpoint not found');
});

app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err)
  } else {
    res.status(500).send('Something went wrong!')
  }
});

module.exports = app;
