const studentList = document.getElementById("students");

const students = fetch("http://localhost:4000/students")
  .then((data) => data.json())
  .then((jsonData) => {
    for (const student of jsonData) {
      const line = document.createElement("li");
      line.textContent = student.name + " is a great " + student.job;
      studentList.appendChild(line);
    }
  });
