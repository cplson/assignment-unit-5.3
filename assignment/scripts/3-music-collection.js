console.log('***** Music Collection *****')

// Global Variables
let collection = [];

// TESTS //

// Populates collection using addToCollection
console.log(addToCollection( 'Imaginary Appalachia', 'Colter Wall', 2015, collection));
console.log(addToCollection( '2014 Forest Hills Drive', 'J Cole', 2014, collection));
console.log(addToCollection('Jar of Flies', 'Alice in Chains', 1994, collection));
console.log(addToCollection('MTV unplugged', 'Alice in chains', 1996, collection));
console.log(addToCollection('Songs of the Plains', 'Colter Wall', 2018, collection));
console.log(addToCollection('Texas Sun', 'Khruangbin and Leon Bridges', 2020, collection));
console.log(collection);

// showCollection
showCollection(collection);

// findByArtist: one result
console.log('Expected one result:', findByArtist('J Cole', collection));
// findByArtist: no results
console.log('Expected no results:', findByArtist('Nickelback', collection));
// findByArtist: two results
console.log('Expected two results:', findByArtist('Colter Wall', collection));

// search - No Results
console.log('Expecting an empty array:', search({ artist: 'Ray Charles', yearPublished: 1957 }, collection));
// search - One result
addToCollection('Ray Charles', 'Ray Charles', 1957, collection);
console.log('Expecting one album:', search({ artist: 'Ray Charles', yearPublished: 1957 }, collection));
// search - Two results
addToCollection('The Great Ray Charles', 'Ray Charles', 1957, collection);
console.log('Expecting two albums:', search({ artist: 'Ray Charles', yearPublished: 1957 }, collection));
// search - Expected not to match
addToCollection('Crying Time', 'Ray Charles', 1966, collection);
console.log('Expecting two albums:', search({ artist: 'Ray Charles', yearPublished: 1957 }, collection));
// search - Expected full collection list
console.log('Expecting the full collection:', search({}, collection));

// END TESTS //

// ******************************* //

// FUNCTION DEFINITIONS //

// Creates a new album and adds it to a collection array
function addToCollection(title, artist, yearPublished, array){
    let album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    }
    array.push(album);
    return album;
}

// logs how many albums are in the collection array parameter and lists them
function showCollection(array){
    console.log(`The number of albums in the collection is: ${array.length}`);
    for(let album of array){
        console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}`);
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
function search(criteria, array){
    let matches = [];
    for(let album of array){
        // Finds any exact matches to the criteria parameter and
        // disregards any criteria not provided in the search criteria argument object
        if((criteria.title === undefined || criteria.title === album.title) &&
            (criteria.artist === undefined || criteria.artist === album.artist) &&
            (criteria.yearPublished === undefined || criteria.yearPublished === album.yearPublished)){
                matches.push(album);
            }
    }
    return matches;
}
// END FUNCTION DEFINITIONS //