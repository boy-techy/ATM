
function startATM(n_2000,n_500,n_100,n_50,maxAmount,check){
  var ret ={};
  ret.two=n_2000;
  ret.five=n_500;
  ret.one=n_100;
  ret.fifty=n_50;
  ret.max=maxAmount;
  ret.check=check;
  

    var amountDeposit = n_2000*2000 + n_500*500 + n_100*100 + n_50*50;
      var logEntry = "<tr class='deposit'><td>" + amountDeposit + "</td><td>" + n_2000 + "</td><td>" + n_500 + "</td><td>" + n_100 + "</td><td>" +n_50 + "</td><td>" + amountDeposit +"</td</tr>";
      var updateLog=function(str){
      $('#someTable').append(str);
      }
      $("#deposit").hide();
      a=2;
      updateLog(logEntry);
  
  //$("#deposit").hide();
  

  /**/
  return ret;

}


function initATM(n_2000,n_500,n_100,n_50,max){
 /* this.notes_2000 = 0;
  this.notes_500  = 0;
  this.notes_100  = 0;
  this.maxLimit = 0;*/
  this.notes_2000 = n_2000;
  this.notes_500 = n_500;
  this.notes_100 = n_100;
  this.notes_50 = n_50;
  this.maxLimit = max;
  this.amountDeposit = this.notes_2000*2000 + this.notes_500*500 + this.notes_100*100 + this.notes_50*50;

  var logEntry = "<tr class='deposit'><td>" + this.amountDeposit + "</td><td>" + this.notes_2000 + "</td><td>" + this.notes_500 + "</td><td>" + this.notes_100 + "</td><td>"+this.notes_50 + "</td><td>" + this.amountDeposit +"</td</tr>";
  
  

  

  //updateLog(logEntry);
  printErrorDeposit("");

}
initATM.prototype.withdraw = function() {
      var updateLog=function(str){
  $('#someTable').append(str);
  }
      var val = document.getElementById("withdrawamount").value;
      if(isNumber(val)){
        var amountWithdraw = parseInt(val);
        var temp_notes_2000 = 0;
        var temp_2000 = 0;
        var temp_notes_500 = 0;
        var temp_500 = 0;
        var temp_notes_100 = 0;
        var temp_100 = 0;
        var temp__notes_50 = 0;
        var temp_50 = 0;
        var tempAmount = amountWithdraw;

            if(amountWithdraw>this.maxLimit){
                printError("Sorry, Please enter amount less than " + this.maxLimit + "!!!!!");
            }else{

              if(tempAmount < 50 || (tempAmount %50 != 0)){
                printError("Please enter the amount in the multiple of 50");
              }else{
                var despense_2000 = parseInt(tempAmount/2000);

                if(this.notes_2000 >= despense_2000){
                  temp_notes_2000 = this.notes_2000 - despense_2000;
                  temp_2000 = 0;
                }else{
                  temp_2000 = despense_2000 - this.notes_2000;
                }

                tempAmount = tempAmount%2000 + temp_2000 * 2000;

                var despense_500 = parseInt(tempAmount/500);
                if(this.notes_500 >= despense_500){
                  temp_notes_500 = this.notes_500 - despense_500;
                  temp_500 = 0;
                }else{
                  temp_500 = despense_500 - this.notes_500;
                }

                tempAmount = tempAmount%500 + temp_500 * 500;
                
                var despense_100 = parseInt(tempAmount/100);

                if(this.notes_100 >= despense_100){
                      temp_notes_100 = this.notes_100 - despense_100;
                      temp_100 = 0;
                    }else{
                      temp_100 = despense_100 - this.notes_100;
                    }
                    tempAmount = tempAmount%100 + temp_100 * 100;

                    var despense_50 = parseInt(tempAmount/50);



                if(this.notes_50 >= despense_50){
                  this.notes_50 = this.notes_50 - despense_50;
                  this.notes_100 = temp_notes_100;
                  this.notes_500 = temp_notes_500;
                  this.notes_2000 = temp_notes_2000;
                  var logEntry = "<tr class='withdraw'><td>" + amountWithdraw + "</td><td>" + this.notes_2000 + "</td><td>" + this.notes_500 + "</td><td>" + this.notes_100 + "</td><td>" +this.notes_50+ "</td><td>"+ (this.notes_2000*2000 + this.notes_500*500 + this.notes_100*100 + this.notes_50*50) +"</td</tr>";
                  updateLog(logEntry);
                  printError("Collect Your Amount!!!!!!!!!!");
                  $("error").addClass("setGreen");
                }else{
                  printError("Not Enough Cash!!!!!!!!!!");
                }
              }
            }
      }

      else{
        $("#error").text("Invalid Amount!!!!!!!");
      }
}


