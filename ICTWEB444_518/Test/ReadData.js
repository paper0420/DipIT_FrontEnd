function loadXML() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      displayData(this);
    }
  };
  xhttp.open("GET", "data.xml", true);
  xhttp.send();
}

function displayData(xml) {
  var xmlDoc = xml.responseXML;
  var table = document.getElementById("data");
  var rows = xmlDoc.getElementsByTagName("person");
  table.innerHTML = "<tr><th>Name</th><th>Age</th><th>Address</th></tr>";
  for (var i = 0; i < rows.length; i++) {
    var name = rows[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
    var age = rows[i].getElementsByTagName("age")[0].childNodes[0].nodeValue;
    var address =
      rows[i].getElementsByTagName("address")[0].childNodes[0].nodeValue;
    table.innerHTML +=
      "<tr><td>" +
      name +
      "</td><td>" +
      age +
      "</td><td>" +
      address +
      "</td></tr>";
  }
}
