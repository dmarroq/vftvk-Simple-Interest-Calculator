function compute() {
    var p = document.getElementById("principal").value; //Amount deposited
    var i = document.getElementById("rate").value; //Rate of interest
    var t = document.getElementById("years").value; //Years in deposit
    
    var si = p * t * i / 100;   //Simple Interest rate

    var futureYear = new Date().getFullYear() + parseInt(t);  //Future Year

    var result = document.getElementById("result");

    if (p <= 0){
        result = alert("Please enter a positive number");
    } else {
        result = "If you deposit " + 
        p + ",\n at an interest rate of " + 
        i + "%.\n You will receive an amount of " + 
        si + "\n in the year " + futureYear + ".";
    };
    
};

function updateRate() {
    var rateval = document.getElementById("rate").value;

    document.getElementById("rate_val").innerText = rateval;
};

function highlight(text) {
    var inputText = document.getElementByClass("button");
    var innerHTML = inputText.innerHTML;
    var index = innerHTML.indexOf(text);
    if (index >= 0) { 
     innerHTML = innerHTML.substring(0,index) + "<span class='highlight'>" + innerHTML.substring(index,index+text.length) + "</span>" + innerHTML.substring(index + text.length);
     inputText.innerHTML = innerHTML;
    }
  };
