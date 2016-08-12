// define new model (table in DB)
// sqlbrowser shows DB + user table

var cryptojs = require('crypto-js');  // to enable token to be hashed

module.exports = function(sequelize, DataTypes) {

	return sequelize.define('token', {  // define token + its properties:
		token: {
			type: DataTypes.VIRTUAL,  // header NOT in DB user table = VIRTUAL
			allowNull: false,
			validate: {
				len: [1]
			},
			set: function(value) { // override set function with hash 
				var hash = cryptojs.MD5(value).toString();

				this.setDataValue('token', value);
				this.setDataValue('tokenHash', hash);
			}
		},
		tokenHash: DataTypes.STRING  // header in DB user table
	});
}