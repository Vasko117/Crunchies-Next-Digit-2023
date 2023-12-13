package digit.nextjs.crunchies.model;

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
    private String imageURL;
}
