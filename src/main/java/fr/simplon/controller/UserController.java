package fr.simplon.controller;


import fr.simplon.model.User;
import fr.simplon.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/users")
@CrossOrigin("*")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    /**
     * permet a un utilisateur de se creer un compte
     * @param newUser
     * @return
     */
    @PostMapping("/add")
    @ResponseStatus(code = HttpStatus.CREATED)
    public User create(@RequestBody User newUser) {


        return userRepository.saveAndFlush(newUser);
    }

    /**
     * affiche la liste des utilisateurs
     * @return
     */
    @GetMapping
    @ResponseStatus(code = HttpStatus.OK)
    public List<User> display() {
        return userRepository.findAll();
    }


    /**
     * permet a l'utilisateur de mettre son compte a jour
     * @param majUser
     * @return
     */
    @PutMapping("/update")
    @ResponseStatus (code = HttpStatus.OK)
    public User update(@RequestBody User majUser) {



        return userRepository.save(majUser);
    }

    /**
     * Permet a l'utilisateur de se connecter a son compte .... TODO a vérifier ...
     * @param mail
     * @param mdp
     * @return
     */
    @RequestMapping("/login")
    @ResponseStatus (code = HttpStatus.OK)
    public Optional<User> getUserMail(@RequestParam (value = "mail") String mail,
                                      @RequestParam(value = "mdp") String mdp) {

        Optional<User> request = null;
        Optional<User> userMail = userRepository.findByMail(mail);


        if (userMail.isPresent()) {
            request = userRepository.findByMail(mail) ;
        }
           return request;
    }

}
