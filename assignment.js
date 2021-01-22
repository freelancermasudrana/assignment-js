function kilometerToMeter(kilometer){
    var meter =kilometer*1000;
    return meter;
}
var dowraw = kilometerToMeter(197);
console.log(dowraw)

function budgetCalculator(ghori,phone,laptop){
    var totalGhori = ghori*50;
    var totalPhone = phone*100;
    var totalLaptop = laptop*500;
    var gerandTotal = totalGhori+totalPhone+totalLaptop;
    return gerandTotal;
}
var result = budgetCalculator(0,10,0);
console.log(result)

function hotelCost(dayCost){
    if(dayCost<=10){
        var undarTen = dayCost*100;
        return undarTen;
    }
    else if(dayCost<=20){
       var firstTenDays = 10*100;
       var remain = dayCost - 10;
        var secoundTenDays = remain*80;
        var gerandUpTen = firstTenDays+secoundTenDays;
        return gerandUpTen;
    }
    else{
        if(dayCost>20){
            var firstTenDays = 10*100;
            var secoundTenDays = 10*80;
            var remain = dayCost - 20;
            var lastDayWaise = remain*50;
            var totalThird = firstTenDays+secoundTenDays+lastDayWaise;
            return totalThird;
        }
    }
}
var total = hotelCost(100);
console.log(total)

function megaFriend(friend){
    var longest = " ";
    friend.map(function(friendsName){
        if(friendsName.length > longest.length){
            longest = friendsName;
        }
    })
    return longest;
}
var resultLongestName = megaFriend(["Masud", "Masud Rana", "Md Masud Rana"]);
console.log(resultLongestName);