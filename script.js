function compute()
{
    var p = document.getElementById("principal").value; //Amount deposited
    var r = document.getElementById("rate").value; //Rate of interest
    var t = document.getElementById("years").value; //Years in deposit

    var currentYear = new Date().getFullYear();  //Current year

    var futureDate = currentYear + t;
    var si = p * r * t;

    print("If you deposit " + p + 
    ", \n at an interest rate of " + r + 
    ".\n You will receive an amount of " + si +
    "in the year " + futureDate)
}
