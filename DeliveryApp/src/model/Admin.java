/***********************************************************************
 * Module:  Admin.java
 * Author:  Luka
 * Purpose: Defines the Class Admin
 ***********************************************************************/
package model;

public class Admin extends User {

	public Admin(int id, String username, String password, String firstName, String lastName, Gender gender, long dateOfBirth,
			Role role, boolean isBlocked, boolean isDeleted) {
		super(id, username, password, firstName, lastName, gender, dateOfBirth, role, isBlocked, isDeleted);
	}
	
}