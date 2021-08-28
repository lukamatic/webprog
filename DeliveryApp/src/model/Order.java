/***********************************************************************
 * Module:  Order.java
 * Author:  Luka
 * Purpose: Defines the Class Order
 ***********************************************************************/
package model;

import java.util.Date;
import java.util.HashMap;

public class Order {
   private String id;
   private HashMap<Integer, Integer> ammountsOfArticles;
   private int restaurantId;
   private Date dateTimeCreated;
   private double price;
   private String customerId;
   private OrderStatus orderStatus;

}