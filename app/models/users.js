const mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    bcrypt = require("bcrypt-nodejs");

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: "Username required." 
    }, 
    password: {
        type: String,
        required: "Password required."
    },
    email: {
        type: String,
        match: [/.+\@.+\..+/, "Please enter a valid e-mail address"]
    },
    pastes: [{
        type: Schema.Types.ObjectId,
        ref: "Paste"
    }],
});

UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(12), null);
};

UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model("User", UserSchema);

module.exports = User;

