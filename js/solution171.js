function remove (string) {

    //coding and coding....
    if (string[string.length-1] === "!"){
      return string.substring(0, string.length-1)
    }
    return string;
  }