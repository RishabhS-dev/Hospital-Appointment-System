@RestController
@RequestMapping("/api/appointments")
@CrossOrigin
public class AppointmentController {

    @Autowired
    private AppointmentRepository repo;

    @PostMapping
    public Appointment book(@RequestBody Appointment a) {
        a.setStatus(Appointment.Status.PENDING);
        return repo.save(a);
    }

    @GetMapping("/doctor/{id}")
    public List<Appointment> byDoctor(@PathVariable int id) {
        return repo.findByDoctorDoctorId(id);
    }

    @PutMapping("/{id}/status")
    public void update(@PathVariable int id,
                       @RequestBody StatusUpdateRequest req) {
        Appointment a = repo.findById(id).orElseThrow();
        a.setStatus(Appointment.Status.valueOf(req.getStatus()));
        repo.save(a);
    }
}
