const User = require("../../../db/models/User");

module.exports = {
  Query: {
    getDoctors: async () => {
      try {
        const users = await User.find({userType: "doctor"});
        return users;
      } catch (error) {
        throw new Error("No User Found!", {error});
      }
    },
  },
};
