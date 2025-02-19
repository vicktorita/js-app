function searchForProuct(str){
    if (str.trim().length === 0) console.log('product name is not provided');
    console.log(`${str} is searched!`);
}

searchForProuct('Book');
searchForProuct('');
searchForProuct('     ');
