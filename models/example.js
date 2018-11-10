module.exports = function (sequelize, DataTypes) {
	var Table = sequelize.define('Table', {
		user_name: DataTypes.STRING,
		user_balance: DataTypes.INTEGER,
		goal_name: DataTypes.STRING,
		goal_upd: DataTypes.INTEGER,
		goal_price: DataTypes.INTEGER
	});
	return Table;
};
