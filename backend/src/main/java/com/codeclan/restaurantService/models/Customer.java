package com.codeclan.restaurantService.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import java.io.Serializable;

@Entity
@Table(name="customers")
class Customer implements Serializable {

    @Column
    private String firstName;
    @Column
    private String lastName;
    @Column
    private
}
