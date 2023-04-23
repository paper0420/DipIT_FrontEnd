const student = ["Peter", "Paul", "Mary"];
var table = document.getElementById("data");
for (let i = 0; i < student.length; i++) {
  table.innerHTML +=
    "<tr><td>" +
    "Student " +
    `${i + 1}` +
    " is" +
    "</td><td>" +
    student[i] +
    "</td></tr>";
}
