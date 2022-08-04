function insertvalue(element) {
  let query = element.innerText;
  let screen = document.getElementById("screen");
  let screenvalue = screen.value;
  if (query == "+" || query == "-" || query == "/" || query == "x") {
    if (
      screenvalue.charAt(screenvalue.length - 1) == "+" ||
      screenvalue.charAt(screenvalue.length - 1) == "-" ||
      screenvalue.charAt(screenvalue.length - 1) == "/" ||
      screenvalue.charAt(screenvalue.length - 1) == "*"
    ) {
    } else {
      if (query == "x") {
        screen.value += "*";
      } else {
        screen.value += query;
      }
    }
  } else {
    screen.value += query;
  }
  console.log();
}
function del() {
  let screen = document.getElementById("screen");
  let screenvalue = screen.value;
  screen.value = screenvalue.slice(0, -1);
}
function reset() {
  let screen = document.getElementById("screen");
  screen.value = "";
}
function calcu() {
  let screen = document.getElementById("screen");
  let screenvalue = screen.value;
  let answer;
  if (
    screenvalue.charAt(screenvalue.length - 1) == "+" ||
    screenvalue.charAt(screenvalue.length - 1) == "-" ||
    screenvalue.charAt(screenvalue.length - 1) == "/" ||
    screenvalue.charAt(screenvalue.length - 1) == "*"
  ) {
    screenvalue = screenvalue.slice(0, -1);
    answer = eval(screenvalue);
  } else {
    answer = eval(screenvalue);
  }
  screen.value = answer;
}
