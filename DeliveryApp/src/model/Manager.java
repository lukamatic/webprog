/***********************************************************************
 * Module:  Manager.java
 * Author:  Luka
 * Purpose: Defines the Class Manager
 ***********************************************************************/
package model;

import java.util.Date;

public class Manager extends User {
	private int restaurantId;

	public Manager(String username, String password, String firstName, String lastName, Gender gender, Date dateOfBirth,
			Role role, boolean isDeleted, int restaurantId) {
		super(username, password, firstName, lastName, gender, dateOfBirth, role, isDeleted);
		this.restaurantId = restaurantId;
	}

	public int getRestaurantId() {
		return restaurantId;
	}

	public void setRestaurantId(int restaurantId) {
		this.restaurantId = restaurantId;
	}
}