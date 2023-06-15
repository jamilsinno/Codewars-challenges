public class FruitGuy{
 
    public static String[] removeRotten(String[] fruitBasket) {
      if (fruitBasket == null || fruitBasket.length <= 0) {
        return new String[0];
      }
    
     // code here 
      for (int i = 0; i < fruitBasket.length; ++i){
        fruitBasket[i] = fruitBasket[i].replace("rotten", "").toLowerCase();
      }
    
      return fruitBasket;
    }
   
   }