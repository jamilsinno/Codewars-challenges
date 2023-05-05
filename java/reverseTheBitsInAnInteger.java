public class BitsOfInteger{
  public static int reverse_bits(int n){
    //Your code here :)
    String temp = Integer.toBinaryString(n);
    String binary = "";
    
    for (int i = temp.length() - 1; i >=0; i--) {
      binary += temp.charAt(i);
    }
    
    return Integer.parseInt(binary, 2);
  }
}