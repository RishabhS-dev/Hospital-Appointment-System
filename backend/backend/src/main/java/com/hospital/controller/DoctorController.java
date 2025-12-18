@RestController
@RequestMapping("/api/doctors")
@CrossOrigin
public class DoctorController {

    @Autowired
    private DoctorRepository repo;

    @GetMapping
    public List<Doctor> getAll() {
        return repo.findAll();
    }
}
