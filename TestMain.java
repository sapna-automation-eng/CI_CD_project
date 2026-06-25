public class TestMain {

    public static void main(String[] args) {

        if (Main.add(2, 3) != 5) {
            throw new RuntimeException("Test Failed");
        }

        System.out.println("All Tests Passed");
    }
}