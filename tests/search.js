function searchForProuct(productName){
    if (productName.trim().length === 0) console.log('product name is not provided');
    console.log(`${productName} is searched!`);
}

searchForProuct('Book');
searchForProuct('');
searchForProuct('     ');
