var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    displayData(this);
  }
};
xhttp.open("GET", "data.xml", false);
xhttp.send();

function displayData(xml) {
  var xmlDoc = xml.responseXML;
  var menuItem = xmlDoc.getElementsByTagName("menuItem");

  for (var i = 0; i < menuItem.length; i++) {
    var name =
      menuItem[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
    var url =
      menuItem[i].getElementsByTagName("url")[0].childNodes[0].nodeValue;
    createItemOnNav(name, url);
  }
}

function createItemOnNav(name, url) {
  let menuList = document.querySelector("ul");

  let listNode = createNodeWithAttribuites("li", { class: "nav-item" });
  let tagNode = createNodeWithAttribuites("a", {
    class: "nav-link",
    href: url,
  });

  const childContent = document.createTextNode(name);
  tagNode.appendChild(childContent);

  listNode.appendChild(tagNode);
  menuList.appendChild(listNode);
}

function createNodeWithAttribuites(element, attributes) {
  let node = document.createElement(element);

  for (att in attributes) {
    const thisAttribute = document.createAttribute(att);
    thisAttribute.value = attributes[att];
    node.setAttributeNode(thisAttribute);
  }

  return node;
}
