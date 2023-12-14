package digit.nextjs.crunchies.service;

import digit.nextjs.crunchies.model.MenuItem;
import digit.nextjs.crunchies.repository.MenuItemRepository;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class MenuItemService {
    MenuItemRepository menuItemRepository;

    @Transactional
    public Optional<MenuItem> getItemByID(Long id){
        return menuItemRepository.findById(id);
    }
}
