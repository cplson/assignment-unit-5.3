console.log('***** Music Collection *****')

// Global Variables
let collection = [];

// SETUP //

// Populates collection using addToCollection
addToCollection( 'Imaginary Appalachia', 'Colter Wall', 2015, collection, [
    {
        name: 'Sleeping on the Blacktop',
        duration: '3:13'
    },
    {
        name: 'The Devil Wears a Suit and Tie', 
        duration: '3:56'
    },
    {
        name: 'Nothin',
        duration: '3:23'
    }
]);
addToCollection( '2014 Forest Hills Drive', 'J Cole', 2014, collection, [
    {
        name: 'Hello',
        duration: '3:39'
    },
    {
        name: 'Love Yourz', 
        duration: '3:31'
    },
    {
        name: 'No Role Modelz',
        duration: '4:52'
    }
]);
addToCollection('Jar of Flies', 'Alice in Chains', 1994, collection, [
    {
        name: 'Nutshell',
        duration: '4:19'
    },
    {
        name: 'I Stay Away', 
        duration: '4:14'
    },
    {
        name: "Don't Follow",
        duration: '4:22'
    }
]);
addToCollection('MTV unplugged', 'Alice in chains', 1996, collection, [
    {
        name: 'Rooster',
        duration: '6:41'
    },
    {
        name: 'Nutshell', 
        duration: '4:57'
    },
    {
        name: 'Heaven Beside You',
        duration: '5:38'
    }
]);
addToCollection('Songs of the Plains', 'Colter Wall', 2018, collection, [
    {
        name: 'Saskatchewan in 1881',
        duration: '2:52'
    },
    {
        name: 'Manitoba Man', 
        duration: '3:59'
    },
    {
        name: 'The Trains Are Gone',
        duration: '2:08'
    }
]);
addToCollection('Texas Sun', 'Khruangbin and Leon Bridges', 2020, collection, [
    {
        name: 'Texas Sun',
        duration: '4:13'
    }
]);
// END SETUP //

// ************************** //

// TESTS //

// addToCollection
console.log('\n\n');
console.log('-TEST: addToCollection-')
console.log(collection);
console.log('\n\n');

// showCollection
console.log('-TEST: showCollection-');
showCollection(collection);
console.log('-END TEST: showCollection-');
console.log('\n\n');


// findByArtist: one result
console.log('-TEST: findByArtist-');
console.log('Expected one result:', findByArtist('J Cole', collection));
// findByArtist: no results
console.log('Expected no results:', findByArtist('Nickelback', collection));
// findByArtist: two results
console.log('Expected two results:', findByArtist('Colter Wall', collection));
console.log('\n\n');

// search - No Results
console.log('-TEST: search-');
console.log('Expecting an empty array:', search(collection, { artist: 'Ray Charles', yearPublished: 1957 }));
// search - One result
addToCollection('Ray Charles', 'Ray Charles', 1957, collection);
console.log('Expecting one album:', search(collection, { artist: 'Ray Charles', yearPublished: 1957 }));
// search - Two results
addToCollection('The Great Ray Charles', 'Ray Charles', 1957, collection);
console.log('Expecting two albums:', search(collection, { artist: 'Ray Charles', yearPublished: 1957 }));
// search - Expected not to match
addToCollection('Crying Time', 'Ray Charles', 1966, collection);
console.log('Expecting two albums:', search(collection, { artist: 'Ray Charles', yearPublished: 1957 }));
// search - Expected full collection list
console.log('Expecting the full collection:', search(collection, {}));
console.log('Expecting the full collection:', search(collection));
// search by track - Expected one result with one track
console.log('\nExpecting one album with Nothin track:')
showCollection(search(collection, {tracks: {name: 'Nothin'}}));
// search by track - Expected two results with one track
console.log('\nExpecting two albums with Nutshell track:')
showCollection(search(collection, {tracks: {name: 'Nutshell'}}));
// search by track - Expected entire collection array
console.log('\nExpecting entire collection:')
showCollection(search(collection));
// END TESTS //

// ******************************* //

// FUNCTION DEFINITIONS //

// Creates a new album and adds it to a collection array
function addToCollection(title, artist, yearPublished, array, tracks){
    let album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
        tracks: tracks
    }
    array.push(album);
    
    return album;
}

// logs how many albums are in the collection array parameter and lists them
function showCollection(array){
    console.log(`The number of albums in the collection is: ${array.length}`);
    for(let album of array){
        console.log(`*${album.title} by ${album.artist}, published in ${album.yearPublished}*`);
        let i = 1;

        
        if(album.tracks != undefined){
            for(let song of album.tracks){
                console.log(`\t${i}. ${song.name}: ${song.duration}`);
                i++;
            }
        }
        
    }
}

// Finds all results matching the artist name parameter in a collection array
function findByArtist(artist, array){
    let matches = [];

    for(let album of array){
        if(album.artist === artist){
            matches.push(album);
        }
    }
    return matches;
}

// Searches for any results that specifically matches the search criteria parameter of a given collection array,
// if criteria is an empty object it will return the entire collection array parameter
function search(array, criteria){
    let matches = [];
    //if no criteria argument was used, set criteria to an empty object
    if(criteria === undefined){
        criteria = {};
    }    
    for(let album of array){     
        // Finds any exact matches to the criteria parameter and
        // disregards any criteria not provided in the search criteria argument object
        if((criteria.title === undefined || criteria.title === album.title) &&
            (criteria.artist === undefined || criteria.artist === album.artist) &&
            (criteria.yearPublished === undefined || criteria.yearPublished === album.yearPublished)){
                if(criteria.tracks === undefined){
                    matches.push(album);
                }
                //This executes if criteria is tracks data
                else if(album.tracks != undefined){
                    for(let track of album.tracks){
                        if(track.name === criteria.tracks.name){
                            addToCollection(album.title, album.artist, album.yearPublished, matches, [track]);
                        }
                    }
                }
            }
    }
    return matches;
}
// END FUNCTION DEFINITIONS //