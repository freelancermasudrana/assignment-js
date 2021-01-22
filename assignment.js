// https://github.com/freelancermasudrana/assignment-js

function kilometerToMeter(kilometer){
    var meter = kilometer*1000; 
    return meter;
}

// var resultMeter = kilometerToMeter(197);
// console.log(resultMeter)



function budgetCalculator(watch,phone,laptop){
    var totalWatch = watch*50;
    var totalPhone = phone*100;
    var totalLaptop = laptop*500;
    var gerandTotal = totalWatch + totalPhone + totalLaptop;
    return gerandTotal;
}

// var totalCost = budgetCalculator(5,10,6);
// console.log(totalCost);

function hotelCost(dayCost){
    if(dayCost<=10){
        var undarTenDays = dayCost*100;
        return undarTenDays;
    }
    else if(dayCost<=20){
       var firstTenDays = 10*100;
       var remaining = dayCost - 10;
        var secoundTenDays = remaining*80;
        var gerandUpTen = firstTenDays+secoundTenDays;
        return gerandUpTen;
    }
    else{
        if(dayCost>20){
            var firstTenDays = 10*100;
            var secoundTenDays = 10*80;
            var remaining = dayCost - 20;
            var lastDayWaise = remaining*50;
            var gerandUpTwentey = firstTenDays + secoundTenDays + lastDayWaise;
            return gerandUpTwentey;
        }
    }
}

// var total = hotelCost(21);
// console.log(total)

function megaFriend(friend){
    var longestString = " ";
    friend.map(function(friendsName){
        if(friendsName.length > longestString.length){
            longestString = friendsName;
        }
    })
    return longestString;
}

// var LongestName = megaFriend(["Masud", "Korimul", "Sorif","Rubel", "Eleyas Hossain","Karina", "Shamima","Rana"]);
// console.log(LongestName);