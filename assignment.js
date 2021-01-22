 // 1.Kilometer To Meter

function kilometerToMeter(kilometer){
    var meter = kilometer * 1000;
    return meter;
}
var result = kilometerToMeter(25);
console.log(result);

//2.Budget Calculator

function budgetCalculator (watch, phone, laptop){
    var total = (50*25) + (100*20) + (150*28);
    return total;
}
var totalPrice = budgetCalculator(1,1,1);
console.log(totalPrice);

//3.Hotel Cost

function hotelCost(day){
    var cost = 0;
    if (day <= 10) {
        cost = day * 100;
    }else if (day <= 20){
        var first10Days = 10 * 100;
        var remaining = day - 10;
        var second20Days = remaining * 80;
        cost = first10Days + second20Days;
    }
    else{
        var first10Days = 10 *100;
        var second20Days = 10 *80;
        var remaining = day - 20;
        var anotherDays = remaining * 50;
        cost = first10Days + second20Days + anotherDays;
    }
    return cost;
}

var count = hotelCost(5);
console.log(count);


//4.Mega Friend

function megaFriend(names){
    var maxword = names[0];

    for ( var i = 0; i < names.length; i++){
        var element = names[i];
        if(element.length > maxword.length){
            maxword =element;
        }
    }
    return maxword;
}
var a = megaFriend(["rakib", "mohinalli","sabana",]);
console.log(a);