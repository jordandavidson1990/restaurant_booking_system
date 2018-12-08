package com.codeclan.restaurantService.models;

import javax.persistence.*;

@Entity
@Table(name="tables")
public class RestTable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="table_number")
    private int tableNumber;
    @Column
    private int covers;

    public RestTable(int tableNumber, int covers) {
        this.tableNumber = tableNumber;
        this.covers = covers;
    }

    public RestTable() {
    }

    public int getTableNumber() {
        return tableNumber;
    }

    public void setTableNumber(int tableNumber) {
        this.tableNumber = tableNumber;
    }

    public int getCovers() {
        return covers;
    }

    public void setCovers(int covers) {
        this.covers = covers;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
