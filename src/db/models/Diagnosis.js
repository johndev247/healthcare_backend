const {model, Schema} = require("mongoose");

const diagnosisSchema = new Schema({
  userFullName: String,
  status: String,
  illness: String,
  createdAt: String,
});

module.exports = model("Diagnosis", diagnosisSchema);
