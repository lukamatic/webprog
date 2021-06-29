/***********************************************************************
 * Module:  Restaurant.java
 * Author:  Luka
 * Purpose: Defines the Class Restaurant
 ***********************************************************************/
package model;

import java.util.ArrayList;

/** @pdOid f160e0d5-26de-4855-823f-fd05f39c43b2 */
public class Restaurant {
   /** @pdOid a000cf3f-6c49-4b87-a71d-0c818214296d */
   private int id;
   /** @pdOid 67d67c3d-ee23-4510-b14a-c725c25e96a3 */
   private int name;
   /** @pdOid 27fc90ef-3a48-4627-9b57-f73eca97e7d1 */
   private RestaurantType restaurantType;
   /** @pdOid 21eef617-72dc-4b61-82ed-f0d6fe365f1f */
   private ArrayList<Integer> articles;
   /** @pdOid 11265bd2-1562-4ce7-861e-4be9b691404a */
   private boolean isOpen;
   /** @pdOid 2a4618c7-3c50-4376-afd6-ae2165620f92 */
   private String logoPath;
   
   /** @pdRoleInfo migr=no name=Location assc=association4 mult=1..1 */
   private Location location;

}