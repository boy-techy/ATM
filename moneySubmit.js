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
	else if( isNumber(oneHundred)==false){
	printError(oneHundred + " Invalid Value");
    valid = false;

	}
	else if( isNumber(fifty)==false){
	printError(oneHundred + " Invalid Value");
    valid = false;

	}
	else if(isNumber(maxAmount)==false){
		printError(maxAmount +" Invalid Value")
    valid = false;

	}
	

	obj = startATM(twoThousand,fiveHundred,oneHundred,fifty,maxAmount,valid);
	ATM= new initATM(obj.two,obj.five,obj.one,obj.fifty,obj.max);
	
	
}
var count =0;
function withdraw(){
  		if(obj.check && count==0){
	  		ATM.withdraw();
	  		count++;
		}
		else if(obj.check && count!=0){
			ATM.withdraw();
		}

}





