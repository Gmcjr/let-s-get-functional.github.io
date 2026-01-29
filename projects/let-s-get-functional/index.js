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
            balance = balance.replace(/[$,]/g, '');
        }
        sum += Number(balance);
    }
    return sum / array.length;
};

// it appears that this function should take in an array and a single charactar
// it should return the number of customers who have names starting with the single character
// should be case insensitive
var firstLetterCount = function(array, char){
    // create a running count for names starting with character
    let count = 0;
    // enforce uppercase for case insensitivity
    char = char.toUpperCase();
    
    // for loop to iterate over array, enforce uppercase on first letter of name
    // and compare first letter with character, updating the count if they match
    for (let i = 0; i < array.length; i++) {
        let firstLetter = array[i].name.charAt(0).toUpperCase();
        if (firstLetter === char) {
            count++;
        }
    }
    
    return count;
};

var friendFirstLetterCount = function(array, customer, char){
    let count = 0;
    char = char.toUpperCase();

    for (let i = 0; i < array.length; i++) {
        if (array[i].name === customer) {
            for (let j = 0; j < array[i].friends.length; j++) {    
                let firstLetter = array[i].friends[j].name.charAt(0).toUpperCase();
                if (firstLetter === char) {
                    count++;
                }
            }
            break;
        }
    }    
        return count;
    };

    var friendsCount = function(array, string) {
        return array
            .filter(function(customer) {
                for (let i = 0; i < customer.friends.length; i++) {
                    if (customer.friends[i].name === string) {
                        return true;
                    }
                }
                return false;
            })
            .map(function(customer) {
                return customer.name;
            });
    };

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
