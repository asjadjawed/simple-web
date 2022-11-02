const students = [
  {
    name: "Hassan",
    job: "Developer",
  },
  {
    name: "Usman",
    job: "Engineer",
  },
  {
    name: "Ahmad Bilal Shehanshah",
    job: "DevOps",
  },
  {
    name: "Amna Rahman",
    job: "Manager",
  },
  {
    name: "Hajra Rafiq",
    job: "Devops Engineer",
  },
  {
    name: "Ubaid Ullah",
    job: "CEO",
  },
];

const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/students", (req, res) => res.json(students));

app.listen(4000, () => console.log("Server is running"));
