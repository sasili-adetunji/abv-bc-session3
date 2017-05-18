/* A Reverse String function

Programmed by Sasiliyu Adetunji
Andela Abuja Bootcamp Home Session Day3
Date: 18 May, 2017.

*/

module.exports = {

reverseString: function (str) {
    if (str== "")
    {
        return null
    }
    let splitString = str.split("");
    let reverseArray = splitString.reverse()
    let joinArray = reverseArray.join("");
    if (joinArray == str){
        return true
    }
    return joinArray;
}
}