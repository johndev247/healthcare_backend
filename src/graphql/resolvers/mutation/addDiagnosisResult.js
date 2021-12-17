const {UserInputError, AuthenticationError} = require("apollo-server");
const checkAuth = require("../../../utils/checkAuth");
const Diagnosis = require("../../../db/models/Diagnosis");
const User = require("../../../db/models/User");

module.exports = {
  Mutation: {
    addDiagnosisResult: async (_, {userFullName, status, illness}, context) => {
      console.log("Executed");
      const user = checkAuth(context);
      if (!user) {
        throw new AuthenticationError("Login Is Required!", {
          errors: {Login: "Login Is Required!"},
        });
      }

      const currentUser = await User.findById(user.id);
      if (!currentUser) {
        throw new Error("User Not Found!");
      }
      if (currentUser.userType !== "doctor") {
        throw new AuthenticationError("Only Admin Can Add New Package!");
      }
      const newDiagnosis = await Diagnosis({
        userFullName,
        status,
        illness,
        createdAt: new Date().toISOString(),
      });
      const res = await newDiagnosis.save();
      return res;
    },
  },
};
