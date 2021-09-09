/***********************************************************************
 * Module:  Address.java
 * Author:  Luka
 * Purpose: Defines the Class Address
 ***********************************************************************/
package model;

public class Address {
	private String street;
	private String streetNumber;
	private String city;
	private String country;
	private String postalCode;
	
	public Address() {
	}
	
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