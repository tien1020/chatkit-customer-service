var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
var lifechathistorySchema = new Schema({
  // `title` is of type String
  date: { type: Date, default: Date.now },
  // `body` is of type String
  chathistory: String,
  patientId: String
});

// This creates our model from the above schema, using mongoose's model method
var lifechathistory = mongoose.model("lifechathistory", lifechathistorySchema);

// Export the Note model
module.exports = lifechathistory;
