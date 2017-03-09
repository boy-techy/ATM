var atm = new ATM();

function validateNumeric(val) {
    var reg = /^\d+$/;
    if (reg.test(val)) {
        return parseInt(val);
    } else {
        return -1;
    }
}

function deposit() {
    var notes_2000 = 0;
    var notes_500 = 0;
    var notes_100 = 0;
    var notes_50 = 0;
    var max_amt = 0;
    try {
        if ((notes_2000 = validateNumeric(document.getElementById('twoThousand').value))==-1) {
            throw new Error("Enter Correct value in 2000");
        }
        if ((notes_500 = validateNumeric(document.getElementById('fiveHundred').value))==-1) {
            throw new Error("Enter Correct value in 500");
        }
        if ((notes_100 = validateNumeric(document.getElementById('oneHundred').value))==-1) {
            throw new Error("Enter Correct value in 100");
        }
        if ((notes_50 = validateNumeric(document.getElementById('fifty').value))==-1) {
            throw new Error("Enter Correct value in 50");
        }
        if ((max_amt = validateNumeric(document.getElementById('maxAmount').value))==-1) {
            throw new Error("Enter Correct value in MaxAmount");
        }
        atm.deposit(notes_2000, notes_500, notes_100, notes_50, max_amt);
        var amountDeposit = notes_2000 * 2000 + notes_500 * 500 + notes_100 * 100 + notes_50 * 50;
        var logEntry = "<tr class='deposit'><td>" + amountDeposit + "</td><td>" + notes_2000 + "</td><td>" + notes_500 + "</td><td>" + notes_100 + "</td><td>" + notes_50 + "</td><td>" + amountDeposit + "</td</tr>";
        var amt = (amountDeposit);
        updateLog(logEntry, amt);
        $('#deposit').hide();
    } catch (err) {
        $("#errorStats").text(err.message);
    }
}

function withdraw() {
    var val = validateNumeric(document.getElementById("withdrawamount").value);
    if (val) {
        var result = atm.withdraw(val);
        if (result.flag) {
            var logEntry = "<tr class='withdraw'><td>" + val + "</td><td>" + result.data[0] + "</td><td>" + result.data[1] + "</td><td>" + result.data[2] + "</td><td>" + result.data[3] + "</td><td>" +
            (atm.main_bal) + "</td</tr>";
            // var amt = (notes_2000 * 2000 + notes_500 * 500 + notes_100 * 100 + notes_50 * 50);
            updateLog(logEntry, atm.main_bal);
            $("#error").css('background-color','green');
            $("#error").text("Please Collect Your Money");
        } else {
            $("#error").css('background-color','red');
            $("#error").text(result.msg);
        }
    } else {
        $("#error").text("Invalid Amount!!!!!!!");
    }
    $("#withdrawamount").val('');
}

function updateLog(str, amt) {
    $('#someTable').append(str);
    $('#amount').html(amt);
    setInterval(function(){
      $('#')
    },1000);
}

function display() {
    atm.display();
}
