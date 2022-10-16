function array(arr){
    //Good luck
      if(arr.length<2){return null}
      let newArr = arr.split(',')
      newArr.pop()
      newArr.shift()
    //   newArr.join(' ')
      if(newArr.length<1){return null}
      return newArr.join(' ')
    }
    