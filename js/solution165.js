function finalGrade (exam, projects) {
    console.log(exam)
    console.log(projects)
    
    return exam >= 90 || projects >= 10 && exam > 0 ? 100 : 
    exam >= 75 && projects >= 5 ? 90 :
    exam >= 50 && projects >= 2 ? 75 :
    0
  }