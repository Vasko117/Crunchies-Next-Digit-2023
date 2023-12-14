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
                MenuItem.builder().name("Burger").imageURL("https://cdn.discordapp.com/attachments/702177541582094394/1184805592192266301/elementor-placeholder-image.png?ex=658d4f31&is=657ada31&hm=4ed9b9c6b8b099c357e259f947e9d5bd3eb40c393fa427edda7092437999fca6&").build(),
                MenuItem.builder().name("Cheese Burger").imageURL("https://cdn.discordapp.com/attachments/702177541582094394/1184805592192266301/elementor-placeholder-image.png?ex=658d4f31&is=657ada31&hm=4ed9b9c6b8b099c357e259f947e9d5bd3eb40c393fa427edda7092437999fca6&").build(),
                MenuItem.builder().name("Bacon Burger").imageURL("https://cdn.discordapp.com/attachments/702177541582094394/1184805592192266301/elementor-placeholder-image.png?ex=658d4f31&is=657ada31&hm=4ed9b9c6b8b099c357e259f947e9d5bd3eb40c393fa427edda7092437999fca6&").build(),
                MenuItem.builder().name("Chicken Burger").imageURL("https://cdn.discordapp.com/attachments/702177541582094394/1184805592192266301/elementor-placeholder-image.png?ex=658d4f31&is=657ada31&hm=4ed9b9c6b8b099c357e259f947e9d5bd3eb40c393fa427edda7092437999fca6&").build(),
                MenuItem.builder().name("Extra Crispy Chicken Burger").imageURL("https://cdn.discordapp.com/attachments/702177541582094394/1184805592192266301/elementor-placeholder-image.png?ex=658d4f31&is=657ada31&hm=4ed9b9c6b8b099c357e259f947e9d5bd3eb40c393fa427edda7092437999fca6&").build(),
                MenuItem.builder().name("Crunchy Burger").imageURL("https://cdn.discordapp.com/attachments/702177541582094394/1184805592192266301/elementor-placeholder-image.png?ex=658d4f31&is=657ada31&hm=4ed9b9c6b8b099c357e259f947e9d5bd3eb40c393fa427edda7092437999fca6&").build()));

        userRepository.saveAll(Arrays.asList(
                User.builder().username("dimi").password("dimi").build()
        ));
    }
}
