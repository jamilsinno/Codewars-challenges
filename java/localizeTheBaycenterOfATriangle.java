import java.text.DecimalFormat;

class Barycenter {
    
    public static double[] barTriang(double[] x, double[] y, double[] z)
    {
        // your code
      DecimalFormat df = new DecimalFormat("#.####");
      
      String rx0 = df.format((x[0] + y[0] + z[0]) / 3);
      String ry0 = df.format((x[1] + y[1] + z[1]) / 3);
      
      double x0 = Double.parseDouble(rx0);
      double y0 = Double.parseDouble(ry0);
      
      double[] ans = new double[2];
      
      ans[0] = x0;
      ans[1] = y0;
      
      return ans;
    }
}