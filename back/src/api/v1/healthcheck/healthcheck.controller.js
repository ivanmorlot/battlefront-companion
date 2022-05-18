const healthcheck = (req, res) => {
  res.status(200).send('Battlefront Companion API is properly running');
};

module.exports = {
  healthcheck
};