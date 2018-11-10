// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================
const friends = require('../data/friends');


function compareScores(a, b) {
  let totalDifference = 0;
  for (let i = 0; i < a.length; i++) {
    let difference = a[i] - b[i];
    if (difference < 0) {
      difference = difference * -1;
    }
    totalDifference = totalDifference + difference;
  }
  return totalDifference;
}

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visits" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  // return app.get("/api/friends", function(req, res) {
  //   res.json({name: 'hi'});
  // });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  return app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body-parser middleware
    const results = req.body.results;
    let leastDifferentFriend;
    let lowestDifference = 999999;
    for (let i = 0; i < friends.length; i++) {
      const totalDifference = compareScores(results, friends[i].scores);
      if (totalDifference < lowestDifference) {
        lowestDifference = totalDifference;
        leastDifferentFriend = friends[i];
      }
    }
    res.send({ name: leastDifferentFriend.name, photo: leastDifferentFriend.photo });
  });

};
