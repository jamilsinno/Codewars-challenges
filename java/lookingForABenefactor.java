import java.util.Arrays;

public class NewAverage {
    public static long newAvg(double[] arr, double navg) throws IllegalArgumentException {
        double sum = Arrays.stream(arr).sum();
        double newSum = (arr.length + 1) * navg;
        double expectedDonation = Math.ceil(newSum - sum);
        
        if (expectedDonation <= 0) {
            throw new IllegalArgumentException();
        }
        
        return (long) expectedDonation;
    }
}