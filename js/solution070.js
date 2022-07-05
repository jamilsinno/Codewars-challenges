// The male gametes or sperm cells in humans and other mammals are heterogametic and contain one of two types of sex chromosomes. They are either X or Y. The female gametes or eggs however, contain only the X sex chromosome and are homogametic.

// The sperm cell determines the sex of an individual in this case. If a sperm cell containing an X chromosome fertilizes an egg, the resulting zygote will be XX or female. If the sperm cell contains a Y chromosome, then the resulting zygote will be XY or male.

// Determine if the sex of the offspring will be male or female based on the X or Y chromosome present in the male's sperm.

// // If the sperm contains the X chromosome, return "Congratulations! You're going to have a daughter."; If the sperm contains the Y chromosome, return "Congratulations! You're going to have a son.";

// PREP

// passed a string representing chromosomes. The argument will only contain two letters. The argument will be in type string. The order in which the argument is passed is not essential

// Return a congratulations on whether the gender assignment is male or female

const chromosomeCheck = (str) => {
    return str === 'XX' ? `Congratulations you have a daughter` : `Congratulations you have a son`
}

// examples

console.log(chromosomeCheck('XX')) //Congratulations you have a daughter
console.log(chromosomeCheck('XY')) //Congratulations you have a son