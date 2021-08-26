/***********************************************************************
 * Module:  Customer.java
 * Author:  Luka
 * Purpose: Defines the Class Customer
 ***********************************************************************/
package model;

import java.util.ArrayList;

public class Customer extends User {
   private ArrayList<Integer> orders;
   private double points;
   
   private Cart cart;
   private CustomerType customerType;

}