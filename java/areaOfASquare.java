public class Geometry{
    public static double squareArea(double A){
      //your code;
      double side = (2*A) / Math.PI;
      double area = Math.pow(side, 2);
      return Math.floor(area * 100) * 0.01d;
    }
  }