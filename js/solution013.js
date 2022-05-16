// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

//PREP

// passed a string 
// elements are ATCG and to be replaced with TAGC respectively

// return the replaced string

function DNAStrand(dna){
    //split the string, replace the elements, join the array

    return dna.split('').map( x => x === 'A' ? 'T' : (x === 'T' ? 'A' : (x === 'C' ? 'G' : 'C'))).join('')
}

// examples

console.log(DNAStrand("AAAA")) // "TTTT"
console.log(DNAStrand("CGCG")) // "GCGC" 
console.log(DNAStrand("ATCG")) // "TAGC"