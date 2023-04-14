public class TheOffice {
  public static String boredom(Person[] staff) {
    int count = 0;
    
    for (int i = 0; i < staff.length; i++){
      switch(staff[i].department){
          case "accounts":
            count += 1;
            break;
          case "finance":
            count += 2;
            break;
          case "canteen":
            count += 10;
            break;
          case "regulation":
            count += 3;
            break;
          case "trading":
            count += 6;
            break;
          case "change":
            count += 6;
            break;
          case "IS":
            count += 8;
            break;
          case "retail":
            count += 5;
            break;
          case "cleaning":
            count += 4;
            break;
          case "pissing about":
            count += 25;
            break;
      }
      System.out.println(count);
    }
    
    if (count >= 100){
      return "party time!!";
    } else if (count > 80){
      return "i can handle this";
    }
    
    return "kill me now";
  }
}