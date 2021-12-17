const issues = require("../../../utils/issues");
const symptoms = require("../../../utils/symptoms");

module.exports = {
  Mutation: {
    diagnose: async (_, args) => {
      const symptom =
        args.symptom.charAt(0).toUpperCase() + args.symptom.slice(1);
      console.log(symptom);
      let issue = null;
      const randomIndex = Math.floor(
        Math.random() * (issues.length - 0 + 1) + 0
      );

      for (let i = 0; i < symptoms.length; i++) {
        if (symptoms[i].Name.includes(symptom)) {
          foundSymptom = symptoms[i];
          console.log(symptoms[i]);
          issue = issues[randomIndex];
        }
      }

      const id = Math.floor(100000000 + Math.random() * 900000000).toString();
      if (issue !== null) {
        return {
          id,
          userFullName: "",
          status: "success",
          illness: issue.Name,
          createdAt: new Date().toISOString(),
        };
      } else {
        return {
          id,
          userFullName: "",
          status: "failed",
          illness: null,
          createdAt: new Date().toISOString(),
        };
      }
    },
  },
};
