const arr1 = [6, 1, 4, 2, 2, 5, 0];
const arr2 = [5, 3, 6, 7, 4, 0, 2];
const arr3 = [4, 3, 5, 0, 2, 0, 2];

function getAmountOfWater(arr) {
    let max = Math.max.apply(null, arr),
        sum = 0;

    for (let i = 1; i <= max; i++) {
        let inside = false,
            gaps = 0;
        
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] >= i) {
                if (inside) {
                    inside = false;
                    sum += gaps;
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
    
    return sum;
}

console.log(getAmountOfWater(arr1))
console.log(getAmountOfWater(arr2))
console.log(getAmountOfWater(arr3))