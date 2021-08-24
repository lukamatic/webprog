/***********************************************************************
 * Module:  Location.java
 * Author:  Luka
 * Purpose: Defines the Class Location
 ***********************************************************************/
package model;

/** @pdOid d8eeeb98-75c1-4e07-bfb0-ad4a5227577e */
public class Location {
	/** @pdOid 7f57ed3d-2559-45d0-bb2f-cdde6be82bf3 */
	private double latitude;
	/** @pdOid 8d75af5e-8361-43c5-900f-19a4186473db */
	private double longitude;
   
	/** @pdRoleInfo migr=no name=Address assc=association3 mult=1..1 */
	private Address address;

	public Location(double latitude, double longitude, Address address) {
		super();
		this.latitude = latitude;
		this.longitude = longitude;
		this.address = address;
	}

	public double getLatitude() {
		return latitude;
	}

	public void setLatitude(double latitude) {
		this.latitude = latitude;
	}

	public double getLongitude() {
		return longitude;
	}

	public void setLongitude(double longitude) {
		this.longitude = longitude;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}
}