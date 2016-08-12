// sqlbrowser shows DB + user table

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('todo', {  // define todo object + properties
		description: {  // header in DB user table
			type: DataTypes.STRING, 
			allowNull: false, 
			validate: {
				len: [1, 250]
			}
		},
		completed: {  // header in DB user table
			type: DataTypes.BOOLEAN, 
			allowNull: false, 
			defaultValue: false 
		}
	});
};
