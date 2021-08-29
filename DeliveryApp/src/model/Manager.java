/***********************************************************************
 * Module:  Manager.java
 * Author:  Luka
 * Purpose: Defines the Class Manager
 ***********************************************************************/
package model;

public class Manager extends User {
	private int restaurantId;

	public Manager(User user) {
		super(user.getUsername(), user.getPassword(), user.getFirstName(), user.getLastName(), user.getGender(),
				user.getDateOfBirth(), user.getRole(), user.isBlocked(), user.isDeleted());
		this.restaurantId = -1;
	}

	public Manager(String username, String password, String firstName, String lastName, Gender gender, long dateOfBirth,
			Role role, boolean isBlocked, boolean isDeleted, int restaurantId) {
		super(username, password, firstName, lastName, gender, dateOfBirth, role, isBlocked, isDeleted);
		this.restaurantId = restaurantId;
	}

	public int getRestaurantId() {
		return restaurantId;
	}

	public void setRestaurantId(int restaurantId) {
		this.restaurantId = restaurantId;
	}
}