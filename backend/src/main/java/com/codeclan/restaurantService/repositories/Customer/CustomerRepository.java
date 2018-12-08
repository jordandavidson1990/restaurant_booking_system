package com.codeclan.restaurantService.repositories.Customer;

import com.codeclan.restaurantService.models.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Long>, CustomerRepositoryCustom {
}
