/***********************************************************************
 * Module:  Deliverer.java
 * Author:  Luka
 * Purpose: Defines the Class Deliverer
 ***********************************************************************/
package model;

import java.util.ArrayList;

public class Deliverer extends User {
	private ArrayList<String> ordersToDeliver;

	public Deliverer(User user) {
		super(user.getUsername(), user.getPassword(), user.getFirstName(), user.getLastName(), user.getGender(),
				user.getDateOfBirth(), user.getRole(), user.isBlocked(), user.isDeleted());
		this.ordersToDeliver = new ArrayList<String>();
	}

	public Deliverer(String username, String password, String firstName, String lastName, Gender gender,
			long dateOfBirth, Role role, boolean isBlocked, boolean isDeleted, ArrayList<String> ordersToDeliver) {
		super(username, password, firstName, lastName, gender, dateOfBirth, role, isBlocked, isDeleted);
		this.ordersToDeliver = ordersToDeliver;
	}
	
	public Deliverer() {
		super();
	}

	public ArrayList<String> getOrdersToDeliver() {
		return ordersToDeliver;
	}

	public void setOrdersToDeliver(ArrayList<String> ordersToDeliver) {
		this.ordersToDeliver = ordersToDeliver;
	}
}