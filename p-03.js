

var balance = 1000;
var withdraw = 400;

if (withdraw < 500) {
    console.log("Minimum withdrawal is 500!")
}
else if (withdraw > balance) {
    console.log("Insufficient balance!!")
}
else {
    console.log("Transaction Successful");
}
