/***********************************************************************
 * Module:  CustomerType.java
 * Author:  Luka
 * Purpose: Defines the Class CustomerType
 ***********************************************************************/
package model;

public class CustomerType {
	private CustomerTypeName customerTypeName;
   	private int discount;
   	private double pointsRequired;
   
   	public CustomerType(CustomerTypeName customerTypeName, int discount, double pointsRequired) {
		super();
		this.customerTypeName = customerTypeName;
		this.discount = discount;
		this.pointsRequired = pointsRequired;
	}

   	public CustomerType() {
		super();
		this.customerTypeName = CustomerTypeName.BRONZE;
		this.discount = 0;
		this.pointsRequired = 0;
	}

	public CustomerTypeName getCustomerTypeName() {
		return customerTypeName;
	}

	public void setCustomerTypeName(CustomerTypeName customerTypeName) {
		this.customerTypeName = customerTypeName;
	}

	public int getDiscount() {
		return discount;
	}

	public void setDiscount(int discount) {
		this.discount = discount;
	}

	public double getPointsRequired() {
		return pointsRequired;
	}

	public void setPointsRequired(double pointsRequired) {
		this.pointsRequired = pointsRequired;
	}
}