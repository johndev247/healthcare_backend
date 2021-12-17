const bcrypt = require("bcrypt");
const {UserInputError} = require("apollo-server");

const User = require("../../../db/models/User");
const generateToken = require("../../../utils/generateToken");

module.exports = {
  Mutation: {
    signUp: async (
      _,
      {firstName, lastName, userType, gender, email, password}
    ) => {
      const checkEmail = await User.findOne({email});
      if (checkEmail) {
        throw new UserInputError("This Email Is Already In Use", {
          errors: {
            email: "This Email Is In Use",
          },
        });
      }

      password = await bcrypt.hash(password, 12);

      const newUser = new User({
        firstName,
        lastName,
        userType,
        gender,
        email,
        password,
        createdAt: new Date().toISOString(),
      });
      const res = await newUser.save();
      const token = generateToken(res);
      return {
        ...res._doc,
        id: res._id,
        token,
      };
    },
  },
};
