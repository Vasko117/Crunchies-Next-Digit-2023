package digit.nextjs.crunchies.model;

import digit.nextjs.crunchies.model.enumiration.MenuItemType;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Builder
@Entity
@Table
@NoArgsConstructor
@AllArgsConstructor
@Data
public class MenuItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private int price;
    private double rating;
    @Lob
    @Column(columnDefinition = "TEXT")
    @Basic(fetch = FetchType.EAGER)
    private String imageURL;
    private MenuItemType menuItemType;
}
