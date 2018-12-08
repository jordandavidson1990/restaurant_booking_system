package com.codeclan.restaurantService.models;

import javax.persistence.*;
import javax.persistence.Table;
import java.sql.Time;
import java.util.Date;

@Entity
@Table(name="bookings")
public class Booking {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private Date date;
    @Column
    private Time time;

    @ManyToOne
    @JoinTable(name="customer_id")
    private Customer customer;

    public Booking(Date date, Time time, Customer customer) {
        this.date = date;
        this.time = time;
        this.customer = customer;
    }

    public Booking() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Time getTime() {
        return time;
    }

    public void setTime(Time time) {
        this.time = time;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }
}
