/***********************************************************************
 * Module:  Customer.java
 * Author:  Luka
 * Purpose: Defines the Class Customer
 ***********************************************************************/
package model;

import java.util.ArrayList;
import java.util.Date;

public class Customer extends User {
	private ArrayList<Integer> orders;
	private double points;
   
	private Cart cart;
	private CustomerType customerType;

	public Customer(String username, String password, String firstName, String lastName, Gender gender, Date dateOfBirth,
			Role role, boolean isDeleted, ArrayList<Integer> orders, double points, Cart cart, CustomerType customerType) {
		super(username, password, firstName, lastName, gender, dateOfBirth, role, isDeleted);
		this.orders = orders;
		this.points = points;
		this.cart = cart;
		this.customerType = customerType;
	}

	public ArrayList<Integer> getOrders() {
		return orders;
	}

	public void setOrders(ArrayList<Integer> orders) {
		this.orders = orders;
	}

	public double getPoints() {
		return points;
	}

	public void setPoints(double points) {
		this.points = points;
	}

	public Cart getCart() {
		return cart;
	}

	public void setCart(Cart cart) {
		this.cart = cart;
	}

	public CustomerType getCustomerType() {
		return customerType;
	}

	public void setCustomerType(CustomerType customerType) {
		this.customerType = customerType;
	}
}