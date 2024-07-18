const dis = document.querySelector(".display");

function appendToDisplay(ele) {
  dis.value += ele;
}
function clearDisplay() {
  dis.value = "";
}

function calculate() {
  try {
    dis.value = eval(dis.value);
  } catch (error) {
    dis.value = "Error";
  }
}
