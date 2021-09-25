const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = function(drivers){
    let newCopy = drivers.slice(0, 2);
    return newCopy;
}

const returnLastTwoDrivers = function(drivers){
    let newArr = drivers.slice(-2);
    return newArr;
}

const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
];

function createFareMultiplier(int) {
    return ((fare) => fare * int);
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);


function selectDifferentDrivers(arrayOfDrivers, newDrivers){
    return newDrivers(arrayOfDrivers);  
}
