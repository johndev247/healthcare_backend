const {AuthenticationError, UserInputError} = require("apollo-server-errors");
const User = require("../../../db/models/User");
const checkAuth = require("../../../utils/checkAuth");

module.exports = {
  Mutation: {
    setAppointment: async (
      _,
      {userFullName, illness, date, time, userId},
      context
    ) => {
      const user = checkAuth(context);
      if (!user) {
        throw new AuthenticationError("Login First", {errors: "Login First"});
      }

      const userToUpdate = await User.findById(userId);
      if (!userToUpdate) {
        throw new Error("User Not Found!");
      }

      userToUpdate.appointments.push({
        userFullName,
        illness,
        date,
        time,
        requestDate: new Date().toISOString(),
      });

      const res = await userToUpdate.save();
      return res;
    },
  },
};
