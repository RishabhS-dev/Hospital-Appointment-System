@Entity
@Data
public class Specialization {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int specializationId;

    private String specializationName;
}
