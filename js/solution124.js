function getDrinkByProfession(param){
    return param.toLowerCase() === 'jabroni' ? 'Patron Tequila' :
      param.toLowerCase() === 'school counselor' ? 'Anything with Alcohol' :
      param.toLowerCase() === 'programmer' ? 'Hipster Craft Beer' :
      param.toLowerCase() === 'bike gang member' ? 'Moonshine' :
      param.toLowerCase() === 'politician' ? 'Your tax dollars' :
      param.toLowerCase() === 'rapper' ? 'Cristal' :
      'Beer' 
  }