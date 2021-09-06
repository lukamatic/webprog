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
   
	public Cart(int customerId, double price) {
		super();
		this.items = new ArrayList<CartItem>();
		this.customerId = customerId;
		this.price = 0.0;
	}

}