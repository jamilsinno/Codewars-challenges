public class PaperFolder {
  public static Long fold(Double distance) {
    double thickness = 0.0001;
    long count = 0;
    
    if (distance < 0){
      return null;
    } else if (distance == 0) {
      return 0L;
    }
    
    while (thickness < distance) {
      thickness *= 2;
      count++;
    }
    
    return count;
  }
}