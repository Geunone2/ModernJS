public class Person {
    private String firstName = "";
    private String lastName = "";

    Person(String fristName, String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public String getFullName() {
        return firstNAme + " " + lastName;
    }
}