function whoIsPaying(name){
    //your code here
    if (name.length <= 2) {
        return [name]
    } else {
        return [name, name.slice(0,2)]
    }
}