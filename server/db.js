const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost/puppybook')

/**
 * Define your models here, or organize them into separate modules.
 */
var Puppy = db.define('puppy',{

	name:{
		type: Sequelize.STRING,
		allowNull: false
	},
	imageUrl:{
		type: Sequelize.STRING,
		defaultValue: "http://images.shape.mdpcdn.com/sites/shape.com/files/styles/slide/public/puppy-2_0.jpg"
	},

	likes:{
		type: Sequelize.INTEGER,
		defaultValue: 0
	}

})

var Owner = db.define('owner', {
	name:{
		type: Sequelize.STRING,
		allowNull: false
	}
})

Puppy.belongsTo(Owner);
Owner.hasMany(Puppy)

module.exports = db

