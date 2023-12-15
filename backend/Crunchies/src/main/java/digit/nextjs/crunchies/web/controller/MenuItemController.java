package digit.nextjs.crunchies.web.controller;

import digit.nextjs.crunchies.model.MenuItem;
import digit.nextjs.crunchies.model.User;
import digit.nextjs.crunchies.model.dto.UserDto;
import digit.nextjs.crunchies.model.dto.UserItemDto;
import digit.nextjs.crunchies.repository.MenuItemRepository;
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
public class MenuItemController {
    private final MenuItemRepository menuItemRepository;
    private final UserRepository userRepository;

    @CrossOrigin(maxAge = 3600)
    @GetMapping("/menuItem/getAll")
    List<MenuItem> getAllItems(){
        return menuItemRepository.findAll();
    }

    @CrossOrigin(maxAge = 3600, origins = "http://localhost:3000")
    @PutMapping("/addItem")
    User addItem(@RequestBody UserItemDto userItemDto) {
        System.out.println(userItemDto.getMenuItemId());
        System.out.println(userItemDto.getUserId());
        User user = userRepository.findById(Long.parseLong(userItemDto.getUserId())).orElse(null);
        MenuItem menuItem = menuItemRepository.findById(Long.parseLong(userItemDto.getMenuItemId())).orElse(null);
        if(user != null) {
            for(int i = 0; i < Integer.parseInt(userItemDto.getAmount()); ++i) user.getMenuItemList().add(menuItem);
        }
        return user;
    }

}
