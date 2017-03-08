function isNumber(str) {
        var pattern = /^\d+$/;
        return pattern.test(str);  // returns a boolean
    
}

function printError(str){
    $("#error").text(str);
}

function printErrorDeposit(str){
    $("#errorDeposit").text(str);
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
		printErrorDeposit(twoThousand+ "  Invalid Value");
    	valid = false;
	}
	else if(isNumber(fiveHundred)==false)
	{
		printErrorDeposit(fiveHundred+ "  Invalid Value");
    valid = false;

	}
	else if( isNumber(oneHundred)==false){
	printErrorDeposit(oneHundred + " Invalid Value");
    valid = false;

	}
	else if( isNumber(fifty)==false){
	printErrorDeposit(fifty + " Invalid Value");
    valid = false;

	}
	else if(isNumber(maxAmount)==false){
		printErrorDeposit(maxAmount +" Invalid Value")
    valid = false;

	}else{
        obj = startATM(twoThousand,fiveHundred,oneHundred,fifty,maxAmount,valid);
        ATM= new initATM(obj.two,obj.five,obj.one,obj.fifty,obj.max);
        //console.log(obj);

    }
	


	//alert(amnt);
	//finalValue(parseInt(twoThousand),parseInt(fiveHundred),parseInt(oneHundred))
	
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





