public class Kata {
    public static String lastSurvivor(String letters, int[] coords) {
      String newStr = letters;
      for (int i = 0; i < coords.length; i++) {
        int index = coords[i];
        if (index >= 0 && index < newStr.length()) {
            newStr = newStr.substring(0, index) + newStr.substring(index + 1);
        }
      }
        return newStr;
    }
}