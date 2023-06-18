function evaporator(content, evap_per_day, threshold){
    let count = 0;
    const thresh = content * (threshold / 100);
    while (content > thresh){
      content *= (1 - (evap_per_day / 100));
      count++;
    }
    return count; 
  }