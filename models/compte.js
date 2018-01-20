var mongoose = require("mongoose");
mongoose.Promise = Promise;

const Schema = mongoose.Schema;

const compteSchema = new Schema(
  {
    gender: {
      type: String,
      required: true
    },
    name: {
      title: String,
      first: String,
      last: String
    },
    location: {
      street: String,
      city: String,
      state: String,
      postcode: Number
    },
    login: {
      username: String,
      password: String,
      salt: String,
      md5: String,
      sha1: String,
      sha256: String
    },
    email: {
      type: String,
      required: true
    },
    dob: {
      type: Date,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    cell: {
      type: String,
      required: true
    },
    picture: {
      large: String,
      medium: String,
      thumbnail: String
    },
    registered: {
      type: Date,
      required: true
    },
    nat: {
      type: String,
      required: true
    }
  },
  { collection: "compte", timestamps: true }
);

module.exports = mongoose.model("compte", compteSchema);
