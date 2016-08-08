module.exports = function(sequelize, DataTypes) {
	return sequelize.define('todo', {
		description: {
			type: DataTypes.STRING, // changed from Sequelize.STRING
			allowNull: false, 
			validate: {
				len: [1, 250]
			}
		},
		completed: {
			type: DataTypes.BOOLEAN, // changed from Sequelize.BOOLEAN
			allowNull: false, 
			defaultValue: false 
		}
	});
};