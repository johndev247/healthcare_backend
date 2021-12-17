const User = require("../../../db/models/User");
const checkAuth = require("../../../utils/checkAuth");

module.exports = {
  Query: {
    getUser: async (_, __, context) => {
      const user = checkAuth(context);
      if (!user) {
        throw new AuthenticationError("Login Is Required!", {
          errors: {Login: "Login Is Required!"},
        });
      }
      const userId = user.id;
      try {
        const user = await User.findById(userId);
        return user;
      } catch (error) {
        throw new Error("User Not Found!");
      }
    },
  },
};
