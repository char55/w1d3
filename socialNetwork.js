var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

// List who follows who
function yourFollowing(data) {
  var following = {};

  for (var person in data) {
    tempObj = data[person];
    if(tempObj.follows.length !== 0) {
      for( var i = 0; i < tempObj.follows.length; i++) {
        if(!following[tempObj.follows[i]]) {
          following[tempObj.follows[i]] = [person];
        } else {
          following[tempObj.follows[i]].push(person);
        }
      }
    }
  }
return following;
}


// console.log(yourFollowing(data));

// List everyone and for each of them, list the names of who they follow and who follows them
function whoIs(data) {

  var flock = yourFollowing(data);

  for (var person in data) {
    var tempSheep = data[person].follows;
    var tempflock = flock[person];
    var shepards = [];
    var sheep = [];


    for(var i = 0; i < tempSheep.length; i++) {
      shepards.push(data[tempSheep[i]].name);
    }
    for(var i = 0; i < tempflock.length; i++) {
      sheep.push(data[tempflock[i]].name);
    }
    console.log(`${person}:\n follows: ${shepards}\n is followed by: ${sheep}`);
  }

}

// whoIs(data);

// Identify who follows the most people
function mostFollowers(data) {
  var sheep;

  for (var person in data) {
    tempObj = data[person];
    if (!sheep) {
      sheep = tempObj;
    }
    if (tempObj.follows.length > sheep.follows.length) {
      sheep = tempObj;
    }
  }
  return sheep.name;
}




// Identify who has the most followers
function sheepCount(data) {
  var peeps = yourFollowing(data);
  var countHeads = [];
  for(head in peeps) {
    sheep = peeps[head];
    countHeads.push(sheep.length);
  }
    var current = countHeads[0];
    var leader = [];
    for(var i = 0; i < countHeads.length; i++) {
      // console.log(countHeads[i]);
      if(countHeads[i] > current) {
        current = countHeads[i];
        leader = i;
      }
    }
    matching = [];
    for (var i = 0 ; i < countHeads.length; i++) {
      if(countHeads[i] === current) {
        matching.push(i);
      }
    }
    leaderName = "";

//// leader Name isn't being assigned right :()
    if (matching.length > 1) {
      for (var i = 0; i < matching.length; i++) {
        leaderName += data[peeps[matching[i]]];
      }
    } else {
      leaderName = data[peeps[matching]];
    }

  return leaderName;
}

console.log(sheepCount(data));

// Identify who has the most followers over 30
// Identify who follows the most people over 30
// List those who follow someone that doesn't follow them back
// List everyone and their reach (sum of # of followers and # of followers of followers)