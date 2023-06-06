import java.util.Arrays;

public class PythagoreanTriple {
	
	public int pythagoreanTriple(int[] triple){
		Arrays.sort(triple);
    
    if (Math.pow(triple[0], 2) + Math.pow(triple[1], 2) == Math.pow(triple[2], 2)) {
      return 1;
    }
    return 0;
	}

	
}
