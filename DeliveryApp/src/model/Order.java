/***********************************************************************
 * Module:  Order.java
 * Author:  Luka
 * Purpose: Defines the Class Order
 ***********************************************************************/
package model;

import java.util.Date;
import java.util.HashMap;

/** @pdOid 2e99c8e7-f93d-4f7f-8562-378916fba5a0 */
public class Order {
   /** @pdOid b1d1d6ab-86b4-4ca6-b615-555717ce2529 */
   private String id;
   /** @pdOid 2dd23994-dd31-4b4f-930a-2799ceb8f7d5 */
   private HashMap<Integer, Integer> ammountsOfArticles;
   /** @pdOid b4c2ecae-4080-4507-b824-26d589d13ba8 */
   private int restaurantId;
   /** @pdOid 0109283e-bdfb-47b3-ae5f-bc32d1eb307f */
   private Date dateTimeCreated;
   /** @pdOid 4b37d023-855a-469c-b0d3-21feee11a40a */
   private double price;
   /** @pdOid 2fdae5d9-a34a-4bc5-ae4f-4d08b2186e09 */
   private String customerId;
   /** @pdOid 0025cf0e-324c-4bed-b30a-c0028bb1b041 */
   private OrderStatus orderStatus;

}