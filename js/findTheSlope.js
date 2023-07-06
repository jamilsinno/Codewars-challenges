function slope(points) {
    if (points[2] - points [0] === 0) return 'undefined'
    let ans = (points[3] - points[1]) / (points[2] - points[0])
    return String(ans)
  }