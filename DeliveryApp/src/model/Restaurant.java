/***********************************************************************
 * Module:  Restaurant.java
 * Author:  Luka
 * Purpose: Defines the Class Restaurant
 ***********************************************************************/
package model;

import java.util.ArrayList;

public class Restaurant {
	private int id;
	private String name;
	private RestaurantType restaurantType;
	private ArrayList<Integer> articles;
	private boolean isOpen;
	private String logoImageName;
	   
	private Location location;

	public Restaurant() {
	}

	public Restaurant(int id, String name, RestaurantType restaurantType, ArrayList<Integer> articles, boolean isOpen,
			String logoImageName, Location location) {
		super();
		this.id = id;
		this.name = name;
		this.restaurantType = restaurantType;
		this.articles = articles;
		this.isOpen = isOpen;
		this.logoImageName = logoImageName;
		this.location = location;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public RestaurantType getRestaurantType() {
		return restaurantType;
	}

	public void setRestaurantType(RestaurantType restaurantType) {
		this.restaurantType = restaurantType;
	}

	public ArrayList<Integer> getArticles() {
		return articles;
	}

	public void setArticles(ArrayList<Integer> articles) {
		this.articles = articles;
	}

	public boolean isOpen() {
		return isOpen;
	}

	public void setOpen(boolean isOpen) {
		this.isOpen = isOpen;
	}

	public String getLogoImageName() {
		return logoImageName;
	}

	public void setLogoImageName(String logoImageName) {
		this.logoImageName = logoImageName;
	}

	public Location getLocation() {
		return location;
	}

	public void setLocation(Location location) {
		this.location = location;
	}

	
}