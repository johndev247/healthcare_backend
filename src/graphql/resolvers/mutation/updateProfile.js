const {AuthenticationError, UserInputError} = require("apollo-server-errors");
const User = require("../../../db/models/User");
const checkAuth = require("../../../utils/checkAuth");

module.exports = {
  Mutation: {
    updateProfile: async (_, {speciality, yearOfExperience, dob}, context) => {
      const user = checkAuth(context);
      if (!user) {
        throw new AuthenticationError("Login First", {errors: "Login First"});
      }

      const userToUpdate = await User.findById(user.id);
      if (!userToUpdate) {
        throw new Error("User Not Found!");
      }

      userToUpdate.set({
        speciality,
        yearOfExperience,
        dob,
        updatedAt: new Date().toISOString(),
      });

      const res = await userToUpdate.save();
      return res;
    },
  },
};
