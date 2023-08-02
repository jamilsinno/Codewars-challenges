ifunction pillars(numPill, dist, width) {
    // your code here
    if (numPill < 2) return 0;
    return (numPill - 1) * (dist * 100) + (numPill - 2) * (width)
  }