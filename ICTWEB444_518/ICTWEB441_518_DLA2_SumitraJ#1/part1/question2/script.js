var alert = document.getElementById("alertMessage");
const showAlert = () => {
  alert.classList.add("show");
};

var dismissButton = document.getElementById("dismissButton");
dismissButton.addEventListener("click", () => {
  alert.classList.remove("show");
});
