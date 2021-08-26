/***********************************************************************
 * Module:  OrderStatus.java
 * Author:  Luka
 * Purpose: Defines the Class OrderStatus
 ***********************************************************************/
package model;

public enum OrderStatus {
   PROCESSING,
   IN_PREPARATION,
   WAITING_FOR_DELIVERY,
   IN_TRANSPORT,
   DELIVERED,
   CANCELED;

}