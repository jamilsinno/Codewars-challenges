function grader(score) {
    if (score >= 0.9 && score <= 1) {
    return "A";
    } else if (score >= 0.8) {
      return "B";
    } else if (score >= 0.7) {
      return "C";
    } else if (score >= 0.6) {
      return "D";
    } else {
      return "F";
    }
}