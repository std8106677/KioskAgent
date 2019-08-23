var mongoose     = require("mongoose");
var Schema       = mongoose.Schema;

var AccountSchema = new Schema({
	username: {type: String},
	password: {type: String},
});

module.exports = mongoose.model("Account", AccountSchema, "Account");