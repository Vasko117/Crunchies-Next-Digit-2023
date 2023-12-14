package digit.nextjs.crunchies.service;

import digit.nextjs.crunchies.model.MenuItem;
import digit.nextjs.crunchies.model.User;
import digit.nextjs.crunchies.repository.UserRepository;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class UserService {
    UserRepository userRepository;

    @Transactional
    public Optional<User> get(String username, String password){
        return userRepository.findByUsernameAndPassword(username, password);
    }
}
