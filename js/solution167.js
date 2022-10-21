var cubeChecker = function(volume, side){
    //   let ans = volume/side
      console.log(volume, side)
      if (volume < 1 || side < 1) {
        return false 
      }
      return volume === side ** 3;
    };