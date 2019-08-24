package  com.javainuse.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import com.javainuse.exception.ResourceNotFoundException;
import com.javainuse.model.Ligne;
import com.javainuse.pojo.LineFilter;
import com.javainuse.repositories.LigneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins="http://localhost:4200", allowedHeaders="*")
public class LigneController {
	@Autowired
	private LigneRepository ligneRepository;

	@GetMapping("/lignes")
	public List<Ligne> getAllLignes() {
        return ligneRepository.findAll();
	}

	@PostMapping("filter/lignes")
    public List<Ligne> getLigneByFilter( @RequestBody LineFilter linefilter) {
		List<Ligne> ligneList = ligneRepository.customFind(linefilter.getNumero(),
														   linefilter.getType(),
                                                           linefilter.getReseau(),
                                                           linefilter.getDepot());
		System.out.println(linefilter.getDepot());
		System.out.println(ligneList);

	    return ligneList;
    }

	@GetMapping("/lignes/{id}")
	public ResponseEntity<Ligne> getLignesById(@PathVariable(value = "id") Long employeeId)
			throws ResourceNotFoundException {
		Ligne ligne = ligneRepository.findById(employeeId)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + employeeId));
		return ResponseEntity.ok().body(ligne);
	}

	@PostMapping("/lignes")
	public Ligne createLigne(@Valid @RequestBody Ligne ligne) {
		return ligneRepository.save(ligne);
	}

	@PutMapping("/lignes/{id}")
	public ResponseEntity<Ligne> updateLigne(@PathVariable(value = "id") Long employeeId,
												@Valid @RequestBody Ligne ligneDetails) throws ResourceNotFoundException {
		Ligne ligne = ligneRepository.findById(employeeId)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + employeeId));

		ligne.setNumero(ligneDetails.getNumero());
		ligne.setOrigin(ligneDetails.getOrigin());
		ligne.setDestination(ligneDetails.getDestination());
        ligne.setRegimH(ligneDetails.getRegimH());
        ligne.setReseau(ligneDetails.getReseau());
        ligne.setEtat(ligneDetails.getEtat());
		final Ligne updatedLigne = ligneRepository.save(ligne);
		return ResponseEntity.ok(updatedLigne);
	}

	@DeleteMapping("/lignes/{id}")
	public Map<String, Boolean> deleteLigne(@PathVariable(value = "id") Long employeeId)
			throws ResourceNotFoundException {
		Ligne ligne = ligneRepository.findById(employeeId)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + employeeId));

		ligneRepository.delete(ligne);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
}
