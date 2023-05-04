// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

const findUniq = (arr) => {
    let obj = {}
    for(let el of arr){
        if(obj[el]){
            obj[el]++
        }else{
            obj[el] = 1
        }
    }
    
    for(let key in obj){
        if(obj[key] === 1) return Number(key)
    }
}

 findUniq([ 1, 1, 1, 2, 1, 1 ])

 //Solution 2

 const findUniq = (arr) => {
    return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
 }