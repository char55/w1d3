var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },


// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
  printPlaylists: function () {
    for(var plist in this["playlists"]) {
      var tempObj = this.playlists[plist];
      console.log(`${plist}: ${tempObj.name} - ${tempObj.tracks.length} tracks`);
    }
  },


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
  printTracks: function () {
    for(var plist in this["tracks"]) {
      var tempObj = this.tracks[plist];
      console.log(`${plist}: ${tempObj.name} by ${tempObj.artist} (${tempObj.album})`);
    }
  },


// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
  printPlaylist: function (playlistId) {
    var tempObjPlay = this.playlists[playlistId];
    console.log(`${playlistId}: ${tempObjPlay.name} - ${tempObjPlay.tracks.length} tracks`);
    var tracksID = tempObjPlay.tracks;

    for(var i = 0; i < tempObjPlay.tracks.length; i++) {
      var tempObjTrack = this.tracks[tracksID[i]];
      console.log(`${tempObjTrack.id}: ${tempObjTrack.name} - (${tempObjTrack.album})`);
    }
  },


// adds an existing track to an existing playlist
  addTrackToPlaylist: function (trackId, playlistId) {
    var tempObj = this.playlists[playlistId];
    tempObj.tracks.push(trackId);
  },


// generates a unique id
// (use this for addTrack and addPlaylist)
  uid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },

// adds a track to the library
  addTrack: function (name, artist, album) {
    var id_name = this.uid();

    this.tracks[id_name] = {
      id: id_name,
      name: name,
      artist: artist,
      album: album
    };

  },

// adds a playlist to the library
  addPlaylist: function (name) {
    var id_name = this.uid();
    this.playlists[id_name] = {
      id: id_name,
      name: name,
      tracks: []
    };
  }


};

// FUNCTIONS TO IMPLEMENT:

library.addTrackToPlaylist("t8", "p02");
library.addPlaylist("whatzup");
library.addTrack("Cashmere", "Led Zeppelin", "Zeppelin I");
library.printPlaylists();
library.printTracks();
library.printPlaylist("p01");

// printPlaylists();

// printTracks();


// printTracks();




// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}

// printPlaylists();
// addTrackToPlaylist("t10", "p01");
// addPlaylist("WAKEUP");
// printPlaylists();