package com.codeclan.restaurantService.repositories.Booking;

import com.codeclan.restaurantService.models.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRepository extends JpaRepository<Booking, Long>, BookingRepositoryCustom {
}
