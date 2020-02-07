package fr.simplon.controller;


import ch.qos.logback.core.CoreConstants;
import fr.simplon.model.Musee;
import fr.simplon.repository.MuseeRepository;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;


import java.util.Map;
import java.util.Optional;


@RestController
@RequestMapping("/test")
@CrossOrigin("*")
public class MuseeController {

    @Autowired
    private MuseeRepository museeRepository;

    @GetMapping("/musees/id")
    public  Optional<Musee> get(@RequestHeader HttpHeaders header) {

        Map<String, String> map = header.toSingleValueMap();

        String idRequest = map.get("idmusee");
        System.out.println("MuseeController.get(header.id)<= " + idRequest);


        Optional<Musee> musee = this.museeRepository.findById(idRequest);

        System.out.println("MuseeController.get ()=>" + musee);

        return  musee ;
    }
}
