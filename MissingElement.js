function findMissingElement(arr){

    let missingArray=[];

    //Step 1:find minElement in an array

    let minElement=Math.min(...arr);

    //Step 2: find maxElement in an array

    let maxElement=Math.max(...arr);

    //iterate over the array

    for(let i=minElement;i<maxElement;i++){

        if(arr.indexOf(i)<0){

            missingArray.push(i);
        }
    }
    return missingArray;
}

console.log(findMissingElement([2,4,6,8]));