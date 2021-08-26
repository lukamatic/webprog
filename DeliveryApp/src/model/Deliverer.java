/***********************************************************************
 * Module:  Deliverer.java
 * Author:  Luka
 * Purpose: Defines the Class Deliverer
 ***********************************************************************/
package model;

import java.util.ArrayList;
import java.util.Date;

public class Deliverer extends User {
	private ArrayList<Integer> ordersToDeliver;

	public Deliverer(String username, String password, String firstName, String lastName, Gender gender,
			Date dateOfBirth, Role role, boolean isDeleted, ArrayList<Integer> ordersToDeliver) {
		super(username, password, firstName, lastName, gender, dateOfBirth, role, isDeleted);
		this.ordersToDeliver = ordersToDeliver;
	}

	public ArrayList<Integer> getOrdersToDeliver() {
		return ordersToDeliver;
	}

	public void setOrdersToDeliver(ArrayList<Integer> ordersToDeliver) {
		this.ordersToDeliver = ordersToDeliver;
	}
}