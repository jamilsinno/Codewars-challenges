public class NthSeries {
	
	public static String seriesSum(int n) {
		// Happy Coding ^_^
    double num = 0.0;
    
    for (int i = 0; i < n; i++ ) {
      num += 1.0 / (1 + 3 * i);
    }
    
    String ans = String.format("%.2f", num);
    
    return ans;
	}
}