package com.codeclan.restaurantService.components;

import com.codeclan.restaurantService.models.Booking;
import com.codeclan.restaurantService.models.Customer;
import com.codeclan.restaurantService.models.RestTable;
import com.codeclan.restaurantService.models.Restaurant;
import com.codeclan.restaurantService.repositories.Booking.BookingRepository;
import com.codeclan.restaurantService.repositories.Customer.CustomerRepository;
import com.codeclan.restaurantService.repositories.RestTable.RestTableRepository;
import javafx.scene.input.DataFormat;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.sql.Time;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

@Component

public class DataLoader implements ApplicationRunner {

    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    BookingRepository bookingRepository;

    @Autowired
    RestTableRepository restTableRepository;

    public DataLoader() {
    }

    public void run(ApplicationArguments args) {

        DateFormat sfd = new SimpleDateFormat("dd-MM-yy");
        String bookingDate = "24-07-2018";
        Date date01 = null;
        try {
            date01 = sfd.parse(bookingDate);
        } catch (ParseException e) {
            e.printStackTrace();
        }

        Time time01 = new Time(12, 00, 00);

        Restaurant restaurant = new Restaurant("78", "Finneston", "12:00:00","23:00:00","Christmas");

        Customer customer1 = new Customer("Florence", "Machine", "fm@growlmail.com", 749473829);
        customerRepository.save(customer1);

        Customer customer2 = new Customer("Neil", "D", "fm@growlmail.com", 749473003);
        customerRepository.save(customer2);

        RestTable table1 = new RestTable(1,3);
        restTableRepository.save(table1);

        RestTable table2 = new RestTable(2, 4);
        restTableRepository.save(table2);

        RestTable table3 = new RestTable(3,6);
        restTableRepository.save(table3);

        Booking booking1 = new Booking(date01, time01 , customer1, table2, 3);
        bookingRepository.save(booking1);


    }
}
