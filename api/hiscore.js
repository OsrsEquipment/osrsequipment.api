const {hiscores} = require('osrs-json-api');

module.exports = (req, res) => {
  const {name = 'iBelg'} = req.query;
  hiscores.getPlayer(name)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch(console.error);
};
