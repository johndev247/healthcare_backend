const User = require("../../../db/models/User");
const {UserInputError, AuthenticationError} = require("apollo-server");
const generateToken = require("../../../utils/generateToken");
const bcrypt = require("bcrypt");

module.exports = {
  Mutation: {
    login: async (_, {email, password}) => {
      console.log();
      const user = await User.findOne({email});
      if (!user) {
        errors.general = "User Not Found";
        throw new UserInputError("User Not Found", {
          errors: {emailOrPhone: "User Not Found"},
        });
      }
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        errors.general = "Incorrect Password";
        throw new UserInputError("Password Incorrect", {
          errors: {password: "Password Incorrect"},
        });
      }
      const token = generateToken(user);
      return {
        ...user._doc,
        id: user._id,
        token,
      };
    },
  },
};
