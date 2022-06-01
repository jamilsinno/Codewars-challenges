// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

// PREP

// will be passed two numbers. No special characters. No strings. No arrays. The parameter passed will represent a person's body weight and weight. Divide those numbers and the returning result will indicate the person's BMI

// return the BMI reading in the form of a string


function bmi(weight, height) {
    let bmi = weight/(height**2)
    console.log(bmi)
    return bmi <= 18.5 ? 'Underweight' :
    bmi <= 25.0 ? 'Normal':
    bmi <= 30.0 ? 'Overweight':
    'Obese'
  }




// examples

console.log(bmi(80, 1.80)) // Normal