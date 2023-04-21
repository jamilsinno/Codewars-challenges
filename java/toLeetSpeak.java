import java.util.HashMap;
import java.util.Map;

class Kata {
    static String toLeetSpeak(final String speak) {
        String inputString = new String(speak);
        Map<Character, Character> charMap = new HashMap<>();
        charMap.put('A', '@');
        charMap.put('B', '8');
        charMap.put('C', '(');
        charMap.put('D', 'D');
        charMap.put('E', '3');
        charMap.put('F', 'F');
        charMap.put('G', '6');
        charMap.put('H', '#');
        charMap.put('I', '!');
        charMap.put('J', 'J');
        charMap.put('K', 'K');
        charMap.put('L', '1');
        charMap.put('M', 'M');
        charMap.put('N', 'N');
        charMap.put('O', '0');
        charMap.put('P', 'P');
        charMap.put('Q', 'Q');
        charMap.put('R', 'R');
        charMap.put('S', '$');
        charMap.put('T', '7');
        charMap.put('U', 'U');
        charMap.put('V', 'V');
        charMap.put('W', 'W');
        charMap.put('X', 'X');
        charMap.put('Y', 'Y');
        charMap.put('Z', '2');
      
        for (Map.Entry<Character, Character> entry : charMap.entrySet()) {
            inputString = inputString.replace(entry.getKey(), entry.getValue());
        }
        return inputString;
    }
}