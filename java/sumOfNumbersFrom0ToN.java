public class SequenceSum{

  public static String showSequence(int value){
    if (value == 0) return "0=0";
    if (value < 0) {
      return value + "<0";
    }
    int i = 0;
    int sum = 0;
    String ans = "";
    //for
    //  while
    while (i <= value) {
      sum += i;
      if (i == value) {
        ans += String.valueOf(i) + " = ";
      } else {
        ans += String.valueOf(i) + "+";
      }
      i++;
    }
    
    return ans + String.valueOf(sum);
  }

  /*public static void main(String args[]){
    int param=Integer.ParseInt(args[0]);
    SequenceSum.showSequence(param);
  }*/
}