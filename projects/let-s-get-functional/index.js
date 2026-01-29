// #!/usr/bin/env node

'use strict';

// I: function takes an array
// O: function returns number of male customers
// int array to hold male customers
// access array for key "gender" in each object with a value "male"
// return number of male customers 
// how will we keep track of male customers?

var maleCount =  function(array) {
// init array to hold male customers
    const output = [];
// create for loop to access all customers
for (let i = 0; i < array.length; i++) {
// access current customer's gender key
    if (array[i].gender === 'male') {
        output.push(array[i]);
    }
}
return output.length;
};

var femaleCount = function(array) {
    // init array to hold female customers
        const output = [];
    // create for loop to access all customers
    for (let i = 0; i < array.length; i++) {
    // access current customer's gender key
        if (array[i].gender === 'female') {
            output.push(array[i]);
        }
    }
    return output.length;
    };;

// oldestCustomer is a function that will take in an array of objects
var oldestCustomer = function(array){
    // create variable for first object in array
    let oldest = array[0];
    // for loop to iterate over array and access the age property of each object
    for (let i = 0; i < array.length; i ++) {
        // if current object age is greater than oldest age
        if (array[i].age > oldest.age) {
        // reassign current object to oldest
            oldest = array[i];
        }
    }
        // return oldest name only
    return oldest.name;
};
  
var youngestCustomer = function(array){
    // create variable for first object in array
    let youngest = array[0];
    // for loop to iterate over array and access the age property of each object
    for (let i = 0; i < array.length; i ++) {
        // if current object age is less than oldest age
        if (array[i].age < youngest.age) {
        // reassign current object to youngest
            youngest = array[i];
        }
    }
        // return youngest name only
    return youngest.name;
};;

var averageBalance = function(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        let balance = array[i].balance;
        if (typeof balance === 'string') {
            balance = balance.replace(/[$,]/g, ''); // strip $ and commas
        }
        sum += Number(balance);
    }
    return sum / array.length;
};

var firstLetterCount;

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
// module.exports.maleCount = maleCount;
// module.exports.femaleCount = femaleCount;
// module.exports.oldestCustomer = oldestCustomer;
// module.exports.youngestCustomer = youngestCustomer;
// module.exports.averageBalance = averageBalance;
// module.exports.firstLetterCount = firstLetterCount;
// module.exports.friendFirstLetterCount = friendFirstLetterCount;
// module.exports.friendsCount = friendsCount;
// module.exports.topThreeTags = topThreeTags;
// module.exports.genderCount = genderCount;
