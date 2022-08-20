function solution(string) {
    return string.split('').map( (x,i) => x === x.toUpperCase() ? ` ${x}` : x).join('')
}
