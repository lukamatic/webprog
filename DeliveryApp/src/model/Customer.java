/***********************************************************************
 * Module:  Customer.java
 * Author:  Luka
 * Purpose: Defines the Class Customer
 ***********************************************************************/
package model;

import java.util.ArrayList;

public class Customer extends User {
	private ArrayList<String> orders;
	private double points;
	private boolean isSuspicious;
   
	private Cart cart;
	private CustomerType customerType;

	public Customer(String username, String password, String firstName, String lastName, Gender gender, long dateOfBirth,
			Role role, boolean isBlocked, boolean isDeleted, ArrayList<String> orders, double points, boolean isSuspicious, Cart cart, CustomerType customerType) {
		super(username, password, firstName, lastName, gender, dateOfBirth, role, isBlocked, isDeleted);
		this.orders = orders;
		this.points = points;
		this.cart = cart;
		this.customerType = customerType;
	}
	
	public Customer(String username, String password, String firstName, String lastName, Gender gender, long dateOfBirth) {
		super(username, password, firstName, lastName, gender, dateOfBirth, Role.CUSTOMER, false, false); // role, isBlocked, isDeleted
		this.orders = new ArrayList<String>();
		this.points = 0;
		this.isSuspicious = false;
		this.cart = new Cart();
		CustomerType customerType = new CustomerType(CustomerTypeName.BRONZE, 0, 0);
		this.customerType = customerType;
	}

	public ArrayList<String> getOrders() {
		return orders;
	}

	public void setOrders(ArrayList<String> orders) {
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

	public boolean isSuspicious() {
		return isSuspicious;
	}

	public void setSuspicious(boolean isSuspicious) {
		this.isSuspicious = isSuspicious;
	}
}