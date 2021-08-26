/***********************************************************************
 * Module:  Admin.java
 * Author:  Luka
 * Purpose: Defines the Class Admin
 ***********************************************************************/
package model;

import java.util.Date;

public class Admin extends User {

	public Admin(String username, String password, String firstName, String lastName, Gender gender, Date dateOfBirth,
			Role role, boolean isDeleted) {
		super(username, password, firstName, lastName, gender, dateOfBirth, role, isDeleted);
	}
	
}