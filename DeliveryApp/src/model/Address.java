/***********************************************************************
 * Module:  Address.java
 * Author:  Luka
 * Purpose: Defines the Class Address
 ***********************************************************************/
package model;

/** @pdOid 99d3f139-aada-47b2-a264-f37360f1c63e */
public class Address {
	/** @pdOid 11700cd1-5682-4967-a8de-6f333bd561cb */
	private String street;
	/** @pdOid 5d6b0e61-e62b-4888-ac13-0272d8bf88ec */
	private String streetNumber;
	/** @pdOid e7e6b246-c801-4baf-b620-def0d4c4dac9 */
	private String city;
	/** @pdOid df1a0230-9fac-4ff9-bf24-2bb0d2764768 */
	private String country;
	/** @pdOid 03c88637-e29a-44da-bcc8-66a358b13c46 */
	private String postalCode;
	
	public Address(String street, String streetNumber, String city, String country, String postalCode) {
		super();
		this.street = street;
		this.streetNumber = streetNumber;
		this.city = city;
		this.country = country;
		this.postalCode = postalCode;
	}

	public String getStreet() {
		return street;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	public String getStreetNumber() {
		return streetNumber;
	}

	public void setStreetNumber(String streetNumber) {
		this.streetNumber = streetNumber;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getPostalCode() {
		return postalCode;
	}

	public void setPostalCode(String postalCode) {
		this.postalCode = postalCode;
	}
}