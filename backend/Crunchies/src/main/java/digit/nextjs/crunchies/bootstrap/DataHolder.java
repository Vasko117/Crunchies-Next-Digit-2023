package digit.nextjs.crunchies.bootstrap;

import digit.nextjs.crunchies.model.MenuItem;
import digit.nextjs.crunchies.model.User;
import digit.nextjs.crunchies.model.enumiration.MenuItemType;
import digit.nextjs.crunchies.repository.MenuItemRepository;
import digit.nextjs.crunchies.repository.UserRepository;
import digit.nextjs.crunchies.service.MenuItemService;
import jakarta.annotation.PostConstruct;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.Collections;

@Component
@AllArgsConstructor
public class DataHolder {
  MenuItemRepository menuItemRepository;
  MenuItemService menuItemService;
  UserRepository userRepository;

  @PostConstruct
  public void init() {
    menuItemRepository.saveAll(Arrays.asList(
            MenuItem.builder().name("HamBurger").price(200).menuItemType(MenuItemType.BURGER).imageURL("https://media.discordapp.net/attachments/1059651715865006090/1184429593625628772/dimitriuss_realistic_hamburger_a6a917da-dc76-4d5b-8341-7ec142cd821e.png?ex=658bf104&is=65797c04&hm=20457cec58f30bf6ebb4deaf4345e5b2b4a4655ca93619d90194a16990c05068&=&format=webp&quality=lossless&width=1229&height=1229").build(),
            MenuItem.builder().name("Triple Smash Burger").price(350).menuItemType(MenuItemType.BURGER).imageURL("https://cdn.midjourney.com/8a3651ab-dff1-442c-8079-e0831b54ccf2/0_3.webp").build(),
            MenuItem.builder().name("CheeseBurger").price(220).menuItemType(MenuItemType.BURGER).imageURL("https://media.discordapp.net/attachments/1059651715865006090/1184429604421775410/dimitriuss_realistic_hamburger_72cfefec-14c1-44db-a96b-9e66bed85983.png?ex=658bf107&is=65797c07&hm=4e175e1ea90b269bbddde6630e5a44d1b39976352c057921cfb3f26a5d344555&=&format=webp&quality=lossless&width=1229&height=1229").build(),
            MenuItem.builder().name("Double CheeseBurger").price(260).menuItemType(MenuItemType.BURGER).imageURL("https://media.discordapp.net/attachments/1059651715865006090/1184429565532188683/dimitriuss_realistic_hamburger_066b48af-6463-4140-9565-45640633f0b1.png?ex=658bf0fe&is=65797bfe&hm=d5c137cdfc1a4a066f418e52b6757b7c798fdb34415fd0a138535e5bcfa29edd&=&format=webp&quality=lossless&width=1229&height=1229").build(),
            MenuItem.builder().name("Jalapeno Burger").price(300).menuItemType(MenuItemType.BURGER).imageURL("https://cdn.midjourney.com/62c34450-3f49-4343-92db-498b5cefcaa2/0_1.webp").build(),
            MenuItem.builder().name("Big Beer Menu").price(350).menuItemType(MenuItemType.COMBO).imageURL("https://cdn.midjourney.com/bb7e5df3-b9d4-4368-ba53-caa765149a05/0_1.webp").build(),
            MenuItem.builder().name("Cheese-Coffee Menu").price(320).menuItemType(MenuItemType.COMBO).imageURL("https://cdn.midjourney.com/bb7e5df3-b9d4-4368-ba53-caa765149a05/0_3.webp").build(),
            MenuItem.builder().name("Double Smash Menu").price(290).menuItemType(MenuItemType.COMBO).imageURL("https://cdn.midjourney.com/bb7e5df3-b9d4-4368-ba53-caa765149a05/0_0.webp").build(),
            MenuItem.builder().name("Small Coke-Cola").price(60).menuItemType(MenuItemType.DRINK).imageURL("https://cdn.midjourney.com/047e47a0-a82c-443f-8bda-da0146a566a1/0_1.webp").build(),
            MenuItem.builder().name("Medium Coke-Cola").price(80).menuItemType(MenuItemType.DRINK).imageURL("https://cdn.midjourney.com/047e47a0-a82c-443f-8bda-da0146a566a1/0_3.webp").build(),
            MenuItem.builder().name("Large Coke-Cola").price(100).menuItemType(MenuItemType.DRINK).imageURL("https://cdn.midjourney.com/047e47a0-a82c-443f-8bda-da0146a566a1/0_2.webp").build(),
            MenuItem.builder().name("Wrap").price(190).menuItemType(MenuItemType.SNACK).imageURL("https://cdn.midjourney.com/7dc88a0a-c192-4eb3-95ab-93b1eeb24b4d/0_0.webp").build(),
            MenuItem.builder().name("Crispy Wrap").price(200).menuItemType(MenuItemType.SNACK).imageURL("https://cdn.midjourney.com/30640a42-ec96-4957-a613-ae8d011146fe/0_0.webp").build(),
            MenuItem.builder().name("Double Wrap").price(240).menuItemType(MenuItemType.SNACK).imageURL("https://cdn.midjourney.com/30640a42-ec96-4957-a613-ae8d011146fe/0_3.webp").build(),
            MenuItem.builder().name("Small Fries").price(60).menuItemType(MenuItemType.FRIES).imageURL("https://cdn.midjourney.com/1d6efe58-baa2-45fc-b47f-0c0c9f833fc6/0_2.webp").build(),
            MenuItem.builder().name("Medium Fries").price(80).menuItemType(MenuItemType.FRIES).imageURL("https://cdn.midjourney.com/1d6efe58-baa2-45fc-b47f-0c0c9f833fc6/0_1.webp").build(),
            MenuItem.builder().name("Large Fries").price(100).menuItemType(MenuItemType.FRIES).imageURL("https://cdn.midjourney.com/1d6efe58-baa2-45fc-b47f-0c0c9f833fc6/0_3.webp").build()));

    userRepository.saveAll(Collections.singletonList(
            User.builder().username("dimi").password("dimi").menuItemList(Collections.singletonList(menuItemService.getItemByID((long) 1).orElse(null))).build()));
  }
}
