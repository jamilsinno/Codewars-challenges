public class TheOffice {
  public static String outed(Person[] meet, String boss) {
    double sum = 0;
    for (int i = 0; i < meet.length; ++i){
      System.out.println(meet[i]);
      if (meet[i].name == boss) {
        sum += meet[i].happiness * 2;
      } else {
        sum += meet[i].happiness;
      }
    }
    if (sum/meet.length <= 5) {
      return "Get Out Now!";
    }
    return "Nice Work Champ!";
  }
}