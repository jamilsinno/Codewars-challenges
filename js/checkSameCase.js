if ((codeA < 65 || codeA > 90) && (codeA < 97 || codeA > 122)) {
    return -1;
  }

  if ((codeB < 65 || codeB > 90) && (codeB < 97 || codeB > 122)) {
    return -1;
  }

  if ((codeA >= 65 && codeA <= 90 && codeB >= 65 && codeB <= 90) ||
      (codeA >= 97 && codeA <= 122 && codeB >= 97 && codeB <= 122)) {
    return 1;
  }