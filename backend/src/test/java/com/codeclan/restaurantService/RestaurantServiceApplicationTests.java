package com.codeclan.restaurantService;

import com.codeclan.restaurantService.models.Customer;
import com.codeclan.restaurantService.models.Restaurant;
import com.codeclan.restaurantService.repositories.Booking.BookingRepository;
import com.codeclan.restaurantService.repositories.Customer.CustomerRepository;
import com.codeclan.restaurantService.repositories.RestTable.RestTableRepository;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import static org.junit.Assert.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest
public class RestaurantServiceApplicationTests {

	@Autowired
	BookingRepository bookingRepository;

	@Autowired
	RestTableRepository restTableRepository;

	@Autowired
	CustomerRepository customerRepository;

	Restaurant restaurant;
	Customer customer;


	@Test
	public void contextLoads() {
	}


	@Test
	public void canAddCustomerToRestaurantCustomersList() {
		Restaurant restaurant = new Restaurant("78", "Finneston", "12:00:00","23:00:00","Christmas");
		Customer customer = new Customer("Florence", "Machine", "fm@growlmail.com", 749473829);
		restaurant.addCustomerToRestaurantCustomersList(customer);
		assertEquals(1, restaurant.getRestCustomerAmount());
	}




//
//	DateFormat sfd = new SimpleDateFormat("dd-MM-yy");
//	String newDate = "24-07-2018";
//	Date date = null;
//		try {
//		date = sfd.parse(newDate);
//	} catch (
//	ParseException e) {
//		e.printStackTrace();
}
