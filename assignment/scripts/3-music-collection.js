console.log('***** Music Collection *****')

// Global Variables
let collection = [];

// TESTS //
console.log(addToCollection( 'Imaginary Appalachia', 'Colter Wall', 2015));
console.log(addToCollection( '2014 Forest Hills Drive', 'J Cole', 2014));
console.log(addToCollection('Jar of Flies', 'Alice in Chains', 1994));
console.log(addToCollection('MTV unplugged', 'Alice in chains', 1996));
console.log(addToCollection('Songs of the Plains', 'Colter Wall', 2018));
console.log(addToCollection('Texas Sun', 'Khruangbin and Leon Bridges', 2020));
console.log(collection);
showCollection(collection);
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

function showCollection(array){
    console.log(`The number of albums in the collection is: ${array.length}`);
    for(let album of array){
        console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}`);
    }
}
//END FUNCTION DEFINITIONS