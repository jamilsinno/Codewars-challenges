public class BlueAndRedMarbles {
  public static double guessBlue(int blueStart, int redStart, int bluePulled, int redPulled) {
    // Place your code here
    float numerator = blueStart - bluePulled;
    float denomenator = (blueStart - bluePulled) + (redStart - redPulled);
    double ans = numerator / denomenator;
    return ans;
  }
}