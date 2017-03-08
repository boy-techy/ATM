function isNumber(str) {
    var pattern = /^\d+$/;
    return pattern.test(str);  // returns a boolean
}
function printError(str){
  $("#error").text(str);
}
function getValue(){
	var twoThousand = document.getElementById("twoThousand").value;
	var fiveHundred = document.getElementById("fiveHundred").value;
  var oneHundred = document.getElementById("oneHundred").value;
	var fifty = document.getElementById("fifty").value;
	var maxAmount =  document.getElementById("maxAmount").value;
  var valid = true;
	if(isNumber(twoThousand)==false)
	{
		printError(twoThousand+ "  Invalid Value");
    valid = false;
	}
	else if(isNumber(fiveHundred)==false)
	{
		printError(fiveHundred+ "  Invalid Value");
    valid = false;

	}
	else if(isNumber(oneHundred)==false)
	{
		printError(oneHundred + " Invalid Value");
    valid = false;

	}
	else if(isNumber(fifty)==false){
		printError(fifty +" Invalid Value")
    valid = false;

	}else if(isNumber(maxAmount)==false){
		printError(maxAmount +" Invalid Value")
    valid = false;

	}


	//alert(amnt);
  if(valid){
    initATM(parseInt(twoThousand),parseInt(fiveHundred),parseInt(oneHundred),parseInt(fifty ),parseInt(maxAmount));
    $("#deposit").hide();
  }
	//finalValue(parseInt(twoThousand),parseInt(fiveHundred),parseInt(oneHundred))

}

//
//
// function moneySubmit(twoThousand,fiveHundred,oneHundred){
// 	this.twoThousand=twoThousand;
// 	this.fiveHundred=fiveHundred;
// 	this.oneHundred=oneHundred;
//
// 	this.currentAmount = 0;
//
// 	var currentAmnt = function(){
// 		this.currentAmount = (twoThousand*2000)+(fiveHundred*500)+(oneHundred*100)
// 		return currentAmount;
// 	}
// 	this.currentAmount= currentAmnt();
//
//
// }
//
// //To print data on the html
// function finalAmount(amount){
// 	alert(amount);
// 	$(".finalAmountDisplay").html(amount);
//
//
// }

//function for final Value
function finalValue(twoThousand,fiveHundred,oneHundred){
	var mon = new moneySubmit(twoThousand,fiveHundred,oneHundred);
	var amnt = mon.currentAmount;
	//alert(amnt);
	finalAmount(amnt);

}
