

var price = 100;

if (price > 500) {
    var discnt = (price * 20) / 100 ; {
        console.log(`You got ${discnt} taka for 20% discount`);
    }
}
else if (price >= 200) {
    if (price <= 500) {
        var discnt = (price * 10) / 100 ; {
            console.log(`You got ${discnt} taka for 10% discount`);
        }
    }
}
else {
    console.log("No discount!!!");
}