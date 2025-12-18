@RestController
@RequestMapping("/api/prescriptions")
@CrossOrigin
public class PrescriptionController {

    @Autowired
    private PrescriptionRepository repo;

    @PostMapping
    public Prescription save(@RequestBody Prescription p) {
        return repo.save(p);
    }
}
