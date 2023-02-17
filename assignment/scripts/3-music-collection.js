console.log('***** Music Collection *****')

// Global Variables
let collection = [];

// TESTS //
console.log(addToCollection( 'Imaginary Appalachia', 'Colter Wall', 2015, collection));
console.log(addToCollection( '2014 Forest Hills Drive', 'J Cole', 2014, collection));
console.log(addToCollection('Jar of Flies', 'Alice in Chains', 1994, collection));
console.log(addToCollection('MTV unplugged', 'Alice in chains', 1996, collection));
console.log(addToCollection('Songs of the Plains', 'Colter Wall', 2018, collection));
console.log(addToCollection('Texas Sun', 'Khruangbin and Leon Bridges', 2020, collection));
console.log(collection);
showCollection(collection);
console.log('Expected one result:', findByArtist('J Cole', collection));
console.log('Expected no results:', findByArtist('Nickelback', collection));
console.log('Expected two results:', findByArtist('Colter Wall', collection));
// END TESTS //

// ******************************* //

//FUNCTION DEFINITIONS

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

function search(criteria){

}
//END FUNCTION DEFINITIONS