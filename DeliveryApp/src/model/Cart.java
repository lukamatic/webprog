/***********************************************************************
 * Module:  Cart.java
 * Author:  Luka
 * Purpose: Defines the Class Cart
 ***********************************************************************/
package model;

import java.util.ArrayList;

public class Cart {
   private ArrayList<CartItem> items;
   private int customerId;
   private double price;
   
	public Cart(ArrayList<CartItem> items, int customerId, double price) {
		super();
		this.items = items;
		this.customerId = customerId;
		this.price = price;
	}
   
	public Cart() {
		super();
		this.items = new ArrayList<CartItem>();
		this.customerId = 0;
		this.price = 0.0;
	}
	
	public Cart(int id) {
		super();
		this.items = new ArrayList<CartItem>();
		this.customerId = id;
		this.price = 0.0;
	}

	public ArrayList<CartItem> getItems() {
		return items;
	}

	public void setItems(ArrayList<CartItem> items) {
		this.items = items;
	}

	public int getCustomerId() {
		return customerId;
	}

	public void setCustomerId(int customerId) {
		this.customerId = customerId;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}
	

}