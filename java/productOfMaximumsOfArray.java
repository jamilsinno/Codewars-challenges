import static java.util.Arrays.stream;

public class Solution
{
    public static long maxProduct(int[] numbers, int sub_size)
    {
        return stream(numbers)
            .sorted()
            .skip(numbers.length - sub_size)
            .asLongStream()
            .reduce( 1, (subtotal, element) -> subtotal * element ); // Do your magic!
    }
}