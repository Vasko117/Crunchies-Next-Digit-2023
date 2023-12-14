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
  public void init() {
    menuItemRepository.saveAll(Arrays.asList(
        MenuItem.builder().name("Burger").imageURL(
            "https://media.discordapp.net/attachments/1059651715865006090/1184429593625628772/dimitriuss_realistic_hamburger_a6a917da-dc76-4d5b-8341-7ec142cd821e.png?ex=658bf104&is=65797c04&hm=20457cec58f30bf6ebb4deaf4345e5b2b4a4655ca93619d90194a16990c05068&=&format=webp&quality=lossless&width=1229&height=1229")
            .build(),
        MenuItem.builder().name("CheeseBurger").imageURL(
            "https://media.discordapp.net/attachments/1059651715865006090/1184429604421775410/dimitriuss_realistic_hamburger_72cfefec-14c1-44db-a96b-9e66bed85983.png?ex=658bf107&is=65797c07&hm=4e175e1ea90b269bbddde6630e5a44d1b39976352c057921cfb3f26a5d344555&=&format=webp&quality=lossless&width=1229&height=1229")
            .build(),
        MenuItem.builder().name("Double CheeseBurger").imageURL(
            "https://media.discordapp.net/attachments/1059651715865006090/1184429565532188683/dimitriuss_realistic_hamburger_066b48af-6463-4140-9565-45640633f0b1.png?ex=658bf0fe&is=65797bfe&hm=d5c137cdfc1a4a066f418e52b6757b7c798fdb34415fd0a138535e5bcfa29edd&=&format=webp&quality=lossless&width=1229&height=1229")
            .build(),
        MenuItem.builder().name("Bacon Burger").imageURL("https://cdn.midjourney.com/7dc88a0a-c192-4eb3-95ab-93b1eeb24b4d/0_0.webp").build(),
        MenuItem.builder().name("Chicken Burger").imageURL("https://cdn.midjourney.com/7dc88a0a-c192-4eb3-95ab-93b1eeb24b4d/0_0.webp").build(),
        MenuItem.builder().name("Extra Crispy Chicken Burger").imageURL("https://cdn.midjourney.com/7dc88a0a-c192-4eb3-95ab-93b1eeb24b4d/0_0.webp").build(),
        MenuItem.builder().name("Crunchy Burger").imageURL("https://cdn.midjourney.com/7dc88a0a-c192-4eb3-95ab-93b1eeb24b4d/0_0.webp").build()));

    userRepository.saveAll(Arrays.asList(
        User.builder().username("dimi").password("dimi").menuItemList(menuItemRepository.findAll()).build()));
  }
}
