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
	private double averageRating;
	private boolean isDeleted;

	private Location location;

	public Restaurant() {
		this.articles = new ArrayList<Integer>();
	}

	public Restaurant(int id, String name, RestaurantType restaurantType, ArrayList<Integer> articles, boolean isOpen,
			String logoImageName, double averageRating, Location location, boolean isDeleted) {
		super();
		this.id = id;
		this.name = name;
		this.restaurantType = restaurantType;
		this.articles = articles;
		this.isOpen = isOpen;
		this.logoImageName = logoImageName;
		this.averageRating = averageRating;
		this.location = location;
		this.isDeleted = isDeleted;
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
  
	public double getAverageRating() {
		return averageRating;
	}

	public void setAverageRating(double averageRating) {
		this.averageRating = averageRating;
	}

	public boolean isDeleted() {
		return isDeleted;
	}

	public void setDeleted(boolean isDeleted) {
		this.isDeleted = isDeleted;
	}
	
	
	
}