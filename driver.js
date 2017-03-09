function ATM() {
    this.twoThousand = 0;
    this.fiveHundred = 0;
    this.hundred = 0;
    this.fifty = 0;
    this.maxAmount = 0;
    this.main_bal = 0
    this.minDeno = 50;

    this.withdraw = function(val) {
        var value = validateNumeric(val);
        var temp = 0;
        var no_of_notes = {
            _twoThousand: 0,
            _fiveHundred: 0,
            _hundred: 0,
            _fifty: 0
        }

        if (value % this.minDeno == 0 && value <= this.maxAmount && value <= this.main_bal) {
            // For 2 Thousand Denomination
            // var flag=false;
            if (value >= 2000) {
                temp = parseInt(value / 2000);
                no_of_notes._twoThousand = (temp > this.twoThousand) ? this.twoThousand : temp;
                value -= (no_of_notes._twoThousand * 2000);
            }
            if (value >= 500) {
                temp = parseInt(value / 500);
                no_of_notes._fiveHundred = (temp > this.fiveHundred) ? this.fiveHundred : temp;
                value -= (no_of_notes._fiveHundred * 500);
            }
            if (value >= 100) {
                temp = parseInt(value / 100);
                no_of_notes._hundred = (temp > this.hundred) ? this.hundred : temp;
                value -= (no_of_notes._hundred * 100);
            }
            if (value >= 50) {
                temp = parseInt(value / 50);
                no_of_notes._fifty = (temp > this.fifty) ? this.fifty : temp;
                value -= (no_of_notes._fifty * 50);
            }
            if (value == 0) {
                this.twoThousand -= no_of_notes._twoThousand;
                this.fiveHundred -= no_of_notes._fiveHundred;
                this.hundred -= no_of_notes._hundred;
                this.fifty -= no_of_notes._fifty;
                this.main_bal -= (no_of_notes._twoThousand * 2000) + (no_of_notes._fiveHundred * 500) + (no_of_notes._hundred * 100) + (no_of_notes._fifty * 50);
                return {
                    flag: 1,
                    data: [this.twoThousand,this.fiveHundred,this.hundred,this.fifty]
                };
            } else {
                return {
                    flag: 0,
                    msg: "Money Can't be Dispensed"
                };
            }
        } else {
            return {
                flag: 0,
                msg: "Enter a Valid Amount"
            };
        }
        $('#withdrawamount').val(' ');
    }

    // this.display = function() {
    //     console.log("2000:" + this.twoThousand + " 500:" + this.fiveHundred + " 100:" + this.hundred + " 50:" + this.fifty);
    // }


    this.deposit = function(two_k, fiveHundred, oneHundred, fifty, max_amt) {
        this.twoThousand = two_k;
        this.fiveHundred = fiveHundred;
        this.hundred = oneHundred;
        this.fifty = fifty
        this.maxAmount = max_amt;
        this.main_bal = 2000 * two_k + 500 * fiveHundred + 100 * oneHundred + 50 * fifty;
        return 1;
    }
}
