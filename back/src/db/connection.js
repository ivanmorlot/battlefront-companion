let mongoose = require('mongoose');

const dbConfig = require('../config').dbConfig;
const log = require('../logging');

// Create MongoDB connection
const createDbConnection = () => {
  return mongoose.connect(dbConfig.mongoUrl, { useNewUrlParser: true });
}

// Get MongoDB connection obj
const getDbConnection = () => {
  return mongoose.connection;
}

const onSuccess = () => {
  log.info('Successfully connected to database: ' + dbConfig.mongoUrl);
}

const onError = (error) => {
  log.error('Failed to connect to database.');
  log.error(error);
}

module.exports = {
  createDbConnection,
  getDbConnection,
  onError,
  onSuccess
}
