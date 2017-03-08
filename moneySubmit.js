function isNumber(str) {
        var pattern = /^\d+$/;
        return pattern.test(str);  // returns a boolean
    
}

function printError(str){
  $("#error").text(str);
}

var obj ={};
var ATM;
function getValue(){
	var twoThousand = document.getElementById("twoThousand").value;
	var fiveHundred = document.getElementById("fiveHundred").value;
	var oneHundred = document.getElementById("oneHundred").value;
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
	else if( isNumber(oneHundred)==false){
	printError(oneHundred + " Invalid Value");
    valid = false;

	}
	else if(isNumber(maxAmount)==false){
		printError(maxAmount +" Invalid Value")
    valid = false;

	}
	

	obj = startATM(twoThousand,fiveHundred,oneHundred,maxAmount,valid);
	ATM= new initATM(obj.two,obj.five,obj.one,obj.max);
	//console.log(obj);
	
	//alert(amnt);
	//finalValue(parseInt(twoThousand),parseInt(fiveHundred),parseInt(oneHundred))
	
}
var count =0;
function withdraw(){
  	console.log(ATM);
  		if(obj.check && count==0){
	  		ATM.withdraw();
	  		count++;
		}
		else if(obj.check && count!=0){
			ATM.withdraw();
		}

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


