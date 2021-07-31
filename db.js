const JSONdb = require('simple-json-db');
module.exports = {
	db: new JSONdb('./cmds/economy/db.json')
}