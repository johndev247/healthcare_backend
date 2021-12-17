const {model, Schema} = require("mongoose");

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  userType: String,
  gender: String,
  email: String,
  password: String,
  profile: {
    speciality: {type: String, default: ""},
    yearOfExperience: {type: String, default: ""},
    dob: {type: String, default: ""},
    updatedAt: {type: String, default: ""},
  },
  appointments: [
    {
      userFullName: String,
      illness: String,
      date: String,
      time: String,
      requestDate: String,
    },
  ],
  createdAt: String,
});

module.exports = model("User", userSchema);
