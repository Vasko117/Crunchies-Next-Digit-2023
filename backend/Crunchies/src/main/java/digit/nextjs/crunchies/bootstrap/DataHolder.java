package digit.nextjs.crunchies.bootstrap;

import digit.nextjs.crunchies.model.MenuItem;
import digit.nextjs.crunchies.model.User;
import digit.nextjs.crunchies.repository.MenuItemRepository;
import digit.nextjs.crunchies.repository.UserRepository;
import jakarta.annotation.PostConstruct;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Component
@AllArgsConstructor
public class DataHolder {
    MenuItemRepository menuItemRepository;
    UserRepository userRepository;

    @PostConstruct
    public void init(){
        menuItemRepository.saveAll(Arrays.asList(
                MenuItem.builder().name("Burger").build(),
                MenuItem.builder().name("Cheese Burger").build(),
                MenuItem.builder().name("Bacon Burger").build(),
                MenuItem.builder().name("Chicken Burger").build(),
                MenuItem.builder().name("Extra Crispy Chicken Burger").build(),
                MenuItem.builder().name("Crunchy Burger").build()));

        userRepository.saveAll(Arrays.asList(
                User.builder().username("dimi").password("dimi").build()
        ));
    }
}
