import java.time.LocalDate;
import java.time.temporal.ChronoUnit;

public class PeriodTime {
    public static boolean periodIsLate(LocalDate last,LocalDate today,int cycleLength) {
        long daysDifference = ChronoUnit.DAYS.between(last, today);
        return daysDifference > cycleLength;
    }
}