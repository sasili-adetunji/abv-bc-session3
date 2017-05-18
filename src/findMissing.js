/* A Find Missing function

Programmed by Sasiliyu Adetunji
Andela Abuja Bootcamp Home Session Day3
Date: 18 May, 2017.

*/

module.exports = {

findMissing: function (arr1, arr2) {

  if (arr1.length === arr2.length)

    return 0

  // join the two array
    let all = arr1.concat(arr2);
   
   // filter the joined array to return only the missing number
    let occurences = all.filter(function(el) {

    	// if an element occurs twice, then the indexOf and lastIndexOf will be same
     return all.indexOf(el) === all.lastIndexOf(el)
        })

    // return the missing number
     return occurences[0]
    }

}