const mongoose = require('mongoose');
let userSchema = mongoose.Schema({
	username:{
		type:String,
		required:true,
		default:'unknown'
	},
	password:{
		type:String,
		required:true,
		default:'unknown'
	},
	active:{
		type:Boolean,
		required:true,
		default:true
	}

})
module.exports = mongoose.model('users', userSchema);
