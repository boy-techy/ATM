var notes_2000 = 0;
var notes_500  = 0;
var notes_100  = 0;
var maxLimit = 0;

function initATM(n_2000,n_500,n_100,max){
  notes_2000 = n_2000;
  notes_500 = n_500;
  notes_100 = n_100;
  maxLimit = max;
  var amountDeposit = notes_2000*2000 + notes_500*500 + notes_100*100;
  var logEntry = "<tr class='deposit'><td>" + amountDeposit + "</td><td>" + notes_2000 + "</td><td>" + notes_500 + "</td><td>" + notes_100 + "</td><td>" + amountDeposit +"</td</tr>";
  updateLog(logEntry);

}

function withdraw(){
  var val = document.getElementById("withdrawamount").value;
  if(isNumber(val)){
    var amountWithdraw = parseInt(val);
    var temp_notes_2000 = 0;
    var temp_2000 = 0;
    var temp_notes_500 = 0;
    var temp_500 = 0;
    var temp__notes_100 = 0;
    var temp_100 = 0;
    var tempAmount = amountWithdraw;
    if(amountWithdraw>maxLimit){
        printError("Sorry, Please enter amount less than " + maxLimit + "!!!!!");
    }else{

      if(tempAmount < 100 || (tempAmount %100 != 0)){
        printError("Please enter the amount in the multiple of 100");
      }else{
        var despense_2000 = parseInt(tempAmount/2000);

        if(notes_2000 >= despense_2000){
          temp_notes_2000 = notes_2000 - despense_2000;
          temp_2000 = 0;
        }else{
          temp_2000 = despense_2000 - notes_2000;
        }
        tempAmount = tempAmount%2000 + temp_2000 * 2000;

        var despense_500 = parseInt(tempAmount/500);
        if(notes_500 >= despense_500){
          temp_notes_500 = notes_500 - despense_500;
          temp_500 = 0;
        }else{
          temp_500 = despense_500 - notes_500;
        }
        tempAmount = tempAmount%500 + temp_500 * 500;

        var despense_100 = parseInt(tempAmount/100);

        if(notes_100 >= despense_100){
          notes_100 = notes_100 - despense_100;
          notes_500 = temp_notes_500;
          notes_2000 = temp_notes_2000;
          var logEntry = "<tr class='withdraw'><td>" + amountWithdraw + "</td><td>" + notes_2000 + "</td><td>" + notes_500 + "</td><td>" + notes_100 + "</td><td>" + (notes_2000*2000 + notes_500*500 + notes_100*100) +"</td</tr>";
          updateLog(logEntry);
          printError("Collect Your Amount!!!!!!!!!!");
          $("error").addClass("setGreen");
        }else{
          printError("Not Enough Cash!!!!!!!!!!");
        }
      }
    }
  }else{
    $("#error").text("Invalid Amount!!!!!!!");
  }
}

function updateLog(str){
  $('#someTable').append(str);
}
