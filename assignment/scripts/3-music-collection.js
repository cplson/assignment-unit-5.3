console.log('***** Music Collection *****')

// Global Variables
let collection = [];

// TESTS //
console.log(addToCollection('Colter Wall', 'Imaginary Appalachia', 2015));
// END TESTS //

// ******************************* //

//FUNCTION DEFINITIONS

// Creates a new album and adds it to the collection array
function addToCollection(title, artist, yearPublished){
    let album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    }
    collection.push(album);
    return album;
}
//END FUNCTION DEFINITIONS