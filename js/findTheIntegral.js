function integrate(coefficient, exponent) {
  exponent++;
  coefficient = coefficient / exponent;
  return `${coefficient}x^${exponent}`
}