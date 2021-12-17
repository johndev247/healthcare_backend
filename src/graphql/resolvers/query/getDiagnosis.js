const Diagnosis = require("../../../db/models/Diagnosis");

module.exports = {
  Query: {
    getDiagnosis: async () => {
      try {
        const diagnosis = await Diagnosis.find({});
        return diagnosis;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};
