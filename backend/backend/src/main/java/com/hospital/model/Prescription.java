@Entity
@Data
public class Prescription {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int prescriptionId;

    @ManyToOne
    private Appointment appointment;

    @Column(columnDefinition = "TEXT")
    private String prescriptionText;
}
