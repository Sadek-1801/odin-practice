const leapYears = function(year) {
    if ((year % 4 === 0 && year % 100 !== 0) ||
        (year % 400 === 0 && year % 100 === 0)){
        return true
    }
    else {
        return false
    }
};
const leapYearsCheck = 1985;
console.log(leapYears(leapYearsCheck))
// completed this test without ai

// Do not edit below this line
module.exports = leapYears;
