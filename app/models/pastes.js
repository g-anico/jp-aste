const mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    bcrypt = require("bcrypt-nodejs");

let PasteSchema = new Schema({
    title: {
        type: String
    },
    body: {
        type: String,
    },
    password: {
        type: String,
    },
    user: {
        type: String,
        required: true
    }
});

PasteSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(12), null);
};

PasteSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

const Paste = mongoose.model("Paste", PasteSchema);

module.exports = Paste;

