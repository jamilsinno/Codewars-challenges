import java.util.Arrays;

public class GiftSorter{
  public String sortGiftCode(String code){
    //Put code here!
    char[] chars = code.toCharArray();
    Arrays.sort(chars);
    return new String(chars);
  }
}