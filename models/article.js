var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  headline: {
    type: String
  },
  // `title` is required and of type String
  title: {
    type: String,
    required: true
  },
  // `link` is required and of type String
  link: {
    type: String,
    required: true
  },
  byline: {
    type: String,
    // required: true
  },
  summary: {
    type: String,
    // required: true
  },
  imageURL: {
    type: String
    // required: true
  },
  savedArticle: {
    type: Boolean,
    default: false
  },
  comment: {
    type: Schema.Types.ObjectId,
    ref: "Comment"
  }
});

// This creates our model from the above schema, using mongoose's model method
// var Article = mongoose.model("Article", ArticleSchema);

// var mongoose = require("mongoose");

// var Schema = mongoose.Schema;

// var ArticleSchema = new Schema({
//   title: {
//     type: String,
//     required: true
//   },
//   link: {
//     type: String,
//     required: true
//   },
//   summary: {
//     type: String,
//     required: true
//   },
//   comment: [{
//     type: Schema.Types.ObjectId,
//     ref: "Comment"
//   }]
// });
module.exports = mongoose.model("Article", ArticleSchema);

