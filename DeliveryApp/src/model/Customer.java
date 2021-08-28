/***********************************************************************
 * Module:  Customer.java
 * Author:  Luka
 * Purpose: Defines the Class Customer
 ***********************************************************************/
package model;

import java.util.ArrayList;

public class Customer extends User {
	private ArrayList<Integer> orders;
	private double points;
	private boolean isSuspicious;
   
	private Cart cart;
	private CustomerType customerType;

	public Customer(int id, String username, String password, String firstName, String lastName, Gender gender, long dateOfBirth,
			Role role, boolean isBlocked, boolean isDeleted, ArrayList<Integer> orders, double points, boolean isSuspicious, Cart cart, CustomerType customerType) {
		super(id, username, password, firstName, lastName, gender, dateOfBirth, role, isBlocked, isDeleted);
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

	public boolean isSuspicious() {
		return isSuspicious;
	}

	public void setSuspicious(boolean isSuspicious) {
		this.isSuspicious = isSuspicious;
	}
}