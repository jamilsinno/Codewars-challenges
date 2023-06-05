import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

public class Kata {
    public static int[] mergeArrays(int[] first, int[] second) {
        Set<Integer> uniqueNumbers = getUniqueNumbers(first, second);
        Integer[] sortedArray = sortArray(uniqueNumbers);
        return convertToIntArray(sortedArray);
    }

    private static Set<Integer> getUniqueNumbers(int[] first, int[] second) {
        Set<Integer> uniqueNumbers = new HashSet<>();
        addAll(uniqueNumbers, first);
        addAll(uniqueNumbers, second);
        return uniqueNumbers;
    }

    private static void addAll(Set<Integer> set, int[] array) {
        for (int num : array) {
            set.add(num);
        }
    }

    private static Integer[] sortArray(Set<Integer> set) {
        Integer[] numberArray = set.toArray(new Integer[0]);
        Arrays.sort(numberArray);
        return numberArray;
    }

    private static int[] convertToIntArray(Integer[] array) {
        return Arrays.stream(array).mapToInt(Integer::intValue).toArray();
    }
}
