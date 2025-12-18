@Entity
@Data
public class Patient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int patientId;

    private String fullName;
    private int age;
    private String gender;
    private String email;
    private String phone;
    private String symptoms;
}
