var mongoose = require('bluebird').promisifyAll(require('mongoose'));
mongoose.Promise = Promise;

const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    uid: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    }
  },
  { collection: "post", timestamps: true }
);

module.exports = mongoose.model("post", postSchema);
