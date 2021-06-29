/***********************************************************************
 * Module:  OrderStatus.java
 * Author:  Luka
 * Purpose: Defines the Class OrderStatus
 ***********************************************************************/
package model;

/** @pdOid fdca2bbd-5ad0-4531-b536-51faaa20350a */
public enum OrderStatus {
   PROCESSING,
   IN_PREPARATION,
   WAITING_FOR_DELIVERY,
   IN_TRANSPORT,
   DELIVERED,
   CANCELED;

}