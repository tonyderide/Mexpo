package fr.simplon.controller;


import fr.simplon.model.User;
import fr.simplon.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/users")
@CrossOrigin("*")
public class UserController {

    @Autowired
    private UserRepository userRepository;


    @PostMapping("/add")
    @ResponseStatus(code = HttpStatus.CREATED)
    public User create(@RequestBody User newUser) {

        return userRepository.saveAndFlush(newUser);
    }

}
