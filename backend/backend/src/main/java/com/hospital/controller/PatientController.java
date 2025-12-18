@RestController
@RequestMapping("/api/patient")
@CrossOrigin
public class PatientController {

    @Autowired
    private PatientRepository repo;

    @PostMapping
    public Patient save(@RequestBody Patient p) {
        return repo.save(p);
    }
}
