package com.codeclan.restaurantService.repositories.RestTable;

import com.codeclan.restaurantService.models.RestTable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RestTableRepository extends JpaRepository <RestTable, Long>, RestTableRepositoryCustom {
}
