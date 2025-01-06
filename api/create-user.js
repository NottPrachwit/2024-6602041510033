const axios = require("axios");

const API_URL = "http://192.168.1.37:8080/api/auth/local/register";
const API_TOKEN =
  "Bearer 9f91b540a6ef475bf6544a1417e78526ee24538fbd7f47f04a40ba3810087151c8d44dcbdbf120413a0a47ee4286caf73cbb425821c71d2d85c8d7390c467bce08a75964e879d246b821dd3991d08054d4940d3cba35e6501b3243211e3daa276fdd3f1198dd33376f150a5cd70377d538a9be0381a72b2914e161581ce87b27";
var name ="prachwit"
var mail ="s6602041510033@email.kmutnb.ac.th"
// objects
const payload = {
  username: name,
  email: mail,
  password: "beam78895530TI",
};

axios
  .post(API_URL, payload, {
    headers: {
      "Content-Type": "application/json",
      Authorization: API_TOKEN,
    },
  })
  .then((response) => {
    console.log("ส่ง API สําเร็จ", response.data);
  })
  .catch((err) => {
    console.log("ส่งไม่ผ่าน ", err.message);
  });