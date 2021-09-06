/***********************************************************************
 * Module:  Order.java
 * Author:  Luka
 * Purpose: Defines the Class Order
 ***********************************************************************/
package model;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;

public class Order {
   private String id;
   private ArrayList<CartItem> items;
   private int restaurantId;
   private Date dateTimeCreated;
   private double price;
   private String customerId;
   private OrderStatus orderStatus;
   
	public Order(String id, ArrayList<CartItem> items, int restaurantId, Date dateTimeCreated, double price,
			String customerId, OrderStatus orderStatus) {
		super();
		this.id = id;
		this.items = items;
		this.restaurantId = restaurantId;
		this.dateTimeCreated = dateTimeCreated;
		this.price = price;
		this.customerId = customerId;
		this.orderStatus = orderStatus;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public ArrayList<CartItem> getItems() {
		return items;
	}

	public void setItems(ArrayList<CartItem> items) {
		this.items = items;
	}

	public int getRestaurantId() {
		return restaurantId;
	}

	public void setRestaurantId(int restaurantId) {
		this.restaurantId = restaurantId;
	}

	public Date getDateTimeCreated() {
		return dateTimeCreated;
	}

	public void setDateTimeCreated(Date dateTimeCreated) {
		this.dateTimeCreated = dateTimeCreated;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public String getCustomerId() {
		return customerId;
	}

	public void setCustomerId(String customerId) {
		this.customerId = customerId;
	}

	public OrderStatus getOrderStatus() {
		return orderStatus;
	}

	public void setOrderStatus(OrderStatus orderStatus) {
		this.orderStatus = orderStatus;
	}
   
   

}