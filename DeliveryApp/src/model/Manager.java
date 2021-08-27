/***********************************************************************
 * Module:  Manager.java
 * Author:  Luka
 * Purpose: Defines the Class Manager
 ***********************************************************************/
package model;

public class Manager extends User {
	private int restaurantId;

	public Manager(int id, String username, String password, String firstName, String lastName, Gender gender, long dateOfBirth,
			Role role, boolean isBlocked,  boolean isDeleted, int restaurantId) {
		super(id, username, password, firstName, lastName, gender, dateOfBirth, role, isBlocked, isDeleted);
		this.restaurantId = restaurantId;
	}

	public int getRestaurantId() {
		return restaurantId;
	}

	public void setRestaurantId(int restaurantId) {
		this.restaurantId = restaurantId;
	}
}