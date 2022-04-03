// Code your solution here

// This function takes an array of drivers' names and a string as arguments, and returns the matching list of drivers. The function should be case insensitive.

function findMatching(driverRoster, someStringThings) {
  function cb(e) {
    return e.toLowerCase() === someStringThings.toLowerCase();
  }
  const driverNames = driverRoster.filter(cb);
  return driverNames;
}

// This function takes an array of drivers' names and a string as arguments for querying the array, and returns all drivers whose names begin with the provided letters.

function fuzzyMatch(driverRoster, someStringThings) {
  const trueMatch = driverRoster.filter(function cb(e) {
    if (e.startsWith(someStringThings)) {
      return e;
    }
  });
  return trueMatch;
}

// This function takes an array of driver objects and a string as arguments. Each driver object has two properties: name and hometown. The function should return each element whose name property matches the provided string argument.

function matchName(driverRosterObj, someStringThings) {
  function itsAMatch(record) {
    if (record.name === someStringThings) {
      return record;
    }
  }
  const myDriver = driverRosterObj.filter(itsAMatch);
  return myDriver;
}
