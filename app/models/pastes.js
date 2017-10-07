
let expiration = 20;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt-nodejs");
/* user profile information */
var pasteID = ObjectId();

let pasteSchema = new Schema({
	id: {type: String},
	paste_title: {type: String, required: true},
 	paste_body: { type: String, required: true },
 	password: {type: String},
  
}, {timestamps: true});

pasteSchema.index({createdAt: 1},{expireAfterSeconds: expiration});

PasteSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(12), null);
};

PasteSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};


const Paste = mongoose.model("Paste", postSchema);
module.exports = Paste;






