import java.util.ArrayList;

public class Solution {

    public static String insertDash(int num) {
        ArrayList<Character> digits = new ArrayList<>();

        while (num > 0) {
            int digit = num % 10;
            char c = (char) (digit + '0');
            digits.add(0, c);
            num /= 10;
        }

        for (int i = 0; i < digits.size() - 1; i++) {
            if (digits.get(i) % 2 != 0 && digits.get(i + 1) % 2 != 0) {
                digits.add(i + 1, '-');
                i++;
            }
        }

        StringBuilder result = new StringBuilder();
        for (Character c : digits) {
            result.append(c);
        }

        return result.toString();
    }
}
