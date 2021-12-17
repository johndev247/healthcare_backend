//Nutations
const signUp = require("./mutation/signUp");
const login = require("./mutation/login");
const addDiagnosisResult = require("./mutation/addDiagnosisResult");
const updateProfile = require("./mutation/updateProfile");
const setAppointment = require("./mutation/setAppointment");
const diagnose = require("./mutation/diagnose");

//Queries
const getDiagnosisResults = require("./query/getDiagnosis");
const getDoctors = require("./query/getDoctors");
const getUser = require("./query/getUser");
const getUsers = require("./query/getUsers");

module.exports = {
  Query: {
    ...getDiagnosisResults.Query,
    ...getDoctors.Query,
    ...getUser.Query,
    ...getUsers.Query,
  },
  Mutation: {
    ...signUp.Mutation,
    ...login.Mutation,
    ...updateProfile.Mutation,
    ...addDiagnosisResult.Mutation,
    ...setAppointment.Mutation,
    ...diagnose.Mutation,
  },
};
