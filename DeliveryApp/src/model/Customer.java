/***********************************************************************
 * Module:  Customer.java
 * Author:  Luka
 * Purpose: Defines the Class Customer
 ***********************************************************************/
package model;

import java.util.ArrayList;

/** @pdOid fafeeb24-a9e2-4c12-8bbc-7c454e838eaf */
public class Customer extends User {
   /** @pdOid ddd3e158-2b89-4e59-829d-0bb35edd6878 */
   private ArrayList<Integer> orders;
   /** @pdOid a71007e6-cc77-468f-9184-87ffefa828c8 */
   private double points;
   
   /** @pdRoleInfo migr=no name=Cart assc=association1 mult=1..1 */
   private Cart cart;
   /** @pdRoleInfo migr=no name=CustomerType assc=association2 mult=1..1 */
   private CustomerType customerType;

}