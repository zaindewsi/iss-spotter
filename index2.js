const { nextISSTimesForMyLocation } = require("./iss-promised");

const printPassTimes = function (passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    console.log(`Next pass at ${datetime} for ${pass.duration} seconds`);
  }
};

nextISSTimesForMyLocation()
  .then((passTimes) => printPassTimes(passTimes))
  .catch((error) => console.log("It didn't work: ", error.message));
