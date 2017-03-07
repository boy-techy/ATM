function isNumber(str) {
        var pattern = /^\d+$/;
        return pattern.test(str);  // returns a boolean
    }

function getValue(){
	var twoThousand = document.getElementById("twoThousand").value;
	var fiveHundred = document.getElementById("fiveHundred").value;
	var oneHundred = document.getElementById("oneHundred").value;
	if(isNumber(twoThousand)==false)
	{
		alert(twoThousand+ "  Invalid Value");
	}
	else if(isNumber(fiveHundred)==false)
	{
		alert(fiveHundred+ "  Invalid Value");

	}
	else if(isNumber(oneHundred)==false)
	{
		alert(oneHundred + " Invalid Value");

	}

	
	//alert(amnt);
	finalValue(parseInt(twoThousand),parseInt(fiveHundred),parseInt(oneHundred))
	
}



function moneySubmit(twoThousand,fiveHundred,oneHundred){
	this.twoThousand=twoThousand;
	this.fiveHundred=fiveHundred;
	this.oneHundred=oneHundred;

	this.currentAmount = 0;

	var currentAmnt = function(){
		this.currentAmount = (twoThousand*2000)+(fiveHundred*500)+(oneHundred*100)
		return currentAmount;
	}
	this.currentAmount= currentAmnt();


}

//To print data on the html
function finalAmount(amount){
	$(".finalAmountDisplay").html(amount);


}

//function for final Value
function finalValue(twoThousand,fiveHundred,oneHundred){
	var mon = new moneySubmit(twoThousand,fiveHundred,oneHundred);
	var amnt = mon.currentAmount;
	//alert(amnt);
	finalAmount(amnt);

}