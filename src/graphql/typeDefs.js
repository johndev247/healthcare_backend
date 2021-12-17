const {gql} = require("apollo-server-express");

const typeDefs = gql`
  type User {
    id: ID!
    token: String
    firstName: String
    lastName: String
    userType: String
    gender: String
    email: String
    profile: Profile
    appointments: [Appointment]
    password: String
    createdAt: String!
  }

  type Profile {
    speciality: String
    yearOfExperience: String
    dob: String
    updatedAt: String
  }
  type Diagnosis {
    id: String
    userFullName: String
    status: String
    illness: String
    createdAt: String
  }

  type Appointment {
    id: String
    userFullName: String
    illness: String
    date: String
    time: String
    requestDate: String
  }

  type Query {
    getUsers: [User]!
    getDoctors: [User]
    getDiagnosis: [Diagnosis]
    getUser(userId: String): User
  }
  type Mutation {
    signUp(
      firstName: String
      lastName: String
      userType: String
      gender: String
      email: String
      password: String
    ): User!
    login(email: String, password: String): User!
    updateProfile(
      speciality: String
      yearOfExperience: String
      dob: String
      updatedAt: String
    ): User!
    addDiagnosisResult(
      userFullName: String
      status: String
      illness: String
      createdAt: String
    ): Diagnosis!
    setAppointment(
      userFullName: String
      illness: String
      date: String
      time: String
      userId: String
      requestDate: String
    ): User!
    diagnose(symptom: String): Diagnosis
  }
`;
module.exports = typeDefs;
