// Actually my knowledge wasnt enough to solve this task. I tried for a few days, but my solution was counting water twice at each column, so I was forced to find a similar method in google to solve this =(


var arr = [5, 2, 7, 4, 1, 3];

function waterAmount(array) {
    var max = Math.max.apply(null, array),
        mySum = 0;

        //found max point
        console.log(max)

    for (var i = 1; i <= max; i++) {
        var inside = false,
            gaps = 0;
        
        for (var j = 0; j < arr.length; j++) {
            if (arr[j] >= i) {
                if (inside) {
                    inside = false;
                    mySum += gaps;
                    j--;
                } else {
                    inside = true;
                    gaps = 0;
                }
            } else {
                gaps++;
            }
        }
    }
    
    return mySum;
}

console.log(waterAmount(arr))