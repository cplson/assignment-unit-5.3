console.log('***** Music Collection *****')

// Global Variables
let collection = [];

// TESTS //
console.log(addToCollection( 'Imaginary Appalachia', 'Colter Wall', 2015));
console.log(addToCollection( '2014 Forest Hills Drive', 'J Cole', 2014));
console.log(addToCollection('Jar of Flies', 'Alice in Chains', 1994));
console.log(addToCollection('MTV unplugged', 'Alice in chains', 1996));
console.log(addToCollection('Songs of the Plains', 'Colter Wall'));
console.log(addToCollection('Texas Sun', 'Khruangbin and Leon Bridges', 2020));
console.log(collection);
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