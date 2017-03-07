function withdraw(){
  var amountWithdraw = parseInt(document.getElementById("withdrawamount").value);
  var notes_2000 = 100;
  var notes_500  = 100;
  var notes_100  = 100;
  var maxLimit = 10000;
  var temp_2000 = 0;
  var temp_500 = 0;
  var temp_100 = 0;
  var tempAmount = amountWithdraw;
  if(amountWithdraw>maxLimit){
      alert("Sorry, Please enter amount less than " + maxLimit + "!!!!!");
  }else{

    if(tempAmount < 100 || (tempAmount %100 != 0)){
      alert("Please enter the amount in the multiple of 100");
    }else{
      var despense_2000 = parseInt(tempAmount/2000);

      if(notes_2000 >= despense_2000){
        notes_2000 = notes_2000 - despense_2000;
        temp_2000 = 0;
      }else{
        temp_2000 = despense_2000 - notes_2000;
      }
      tempAmount = tempAmount%2000 + temp_2000 * 2000;

      var despense_500 = parseInt(tempAmount/500);

      if(notes_500 >= despense_500){
        notes_500 = notes_500 - despense_500;
        temp_500 = 0;
      }else{
        temp_500 = despense_500 - notes_500;
      }
      tempAmount = tempAmount%500 + temp_500 * 500;

      var despense_100 = parseInt(tempAmount/100);

      if(notes_100 >= despense_100){
        var logEntry = "<tr><td>" + amountWithdraw + "</td><td>" + notes_2000 + "</td><td>" + notes_500 + "</td><td>" + notes_100 + "</td><td>" + (notes_2000*2000 + notes_500*500 + notes_100*100) +"</td</tr>";
        alert("Success!!!!!!" + despense_2000 + " : " + despense_500 +" : "+ despense_100);
        updateLog(logEntry);
      }else{
        notes_100 = notes_100 - despense_100;
        alert("Not Enough Cash!!!!!!!!!!" + despense_2000 + " : " + despense_500 +" : "+ despense_100);
      }
    }
  }
}

function updateLog(str){
  $('#someTable').append(str);
}
