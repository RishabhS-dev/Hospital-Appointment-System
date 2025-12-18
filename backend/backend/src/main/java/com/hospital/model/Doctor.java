@Entity
@Data
public class Doctor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int doctorId;

    private String fullName;
    private String email;
    private String phone;
    private String location;

    @ManyToOne
    private Specialization specialization;
}
