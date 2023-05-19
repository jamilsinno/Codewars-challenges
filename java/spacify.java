public class Spacify {
    public static String spacify(String str){
        String[] ans = str.split("");
        String sol = "";
        for (int i = 0; i < ans.length; ++i){
          sol += ans[i] + " ";
        }
        return sol.trim(); //show me the code!
    }
}