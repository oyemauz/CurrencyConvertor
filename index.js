function result(opt1, opt2) {
  return new Promise((resolve, reject) => {
    var requestURL = `https://api.exchangerate.host/convert?from=${opt1}&to=${opt2}&`;
    var request = new XMLHttpRequest();
    request.open("GET", requestURL);
    request.responseType = "json";
    request.send();
    request.onload = function () {
      var response = request.response;
      resolve(response.result);
    };
  });
}

let button = document.getElementsByClassName("btn").innerHTML;

// Get Values.

function myfunction() {
  const amount = document.getElementById("input").value;
  const opt1 = document.getElementById("select1").value;
  const opt2 = document.getElementById("select2").value;
  result(opt1, opt2).then((value) => {
    // console.log(value * amount);
    let ans = value * amount;
    ans = ans.toFixed(3);
    var ele = document.getElementById("result");
    ele.style.visibility = "visible";
    ele.innerHTML = `${amount} ${opt1} = ${ans} ${opt2}`;
  });
}
