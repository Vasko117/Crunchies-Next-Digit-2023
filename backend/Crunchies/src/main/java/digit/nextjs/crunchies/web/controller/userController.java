package digit.nextjs.crunchies.web.controller;

import digit.nextjs.crunchies.model.User;
import digit.nextjs.crunchies.model.dto.UserDto;
import digit.nextjs.crunchies.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@AllArgsConstructor
public class userController {
    UserRepository userRepository;

    @CrossOrigin(maxAge = 3600)
    @GetMapping("/user/getAll")
    List<User> getAllUsers(){
        return userRepository.findAll();
    }

    @PostMapping("/user/register")
    User registerUser(@RequestBody UserDto userDto){
        User newUser = User.builder()
                .username(userDto.getUsername())
                .password(userDto.getPassword()).build();

        return userRepository.save(newUser);
    }

    @PostMapping("user/login")
    ResponseEntity<?> loginUser(@RequestBody UserDto userDto){
        Optional<User> user = userRepository.findByUsernameAndPassword(userDto.getUsername(), userDto.getPassword());
        if(user.isPresent()) return new ResponseEntity<>(user, HttpStatus.OK);
        else return new ResponseEntity<>("UserNotFound", HttpStatus.NOT_FOUND);
    }
}
