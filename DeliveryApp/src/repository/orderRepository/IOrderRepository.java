/***********************************************************************
 * Module:  IOrderRepository.java
 * Author:  graho
 * Purpose: Defines the Interface IOrderRepository
 ***********************************************************************/
package repository.orderRepository;

import java.util.ArrayList;

import model.Order;
import repository.IRepository;

/** @pdOid 2a4cda05-736b-45b8-9d93-06c913328a6f */
public interface IOrderRepository extends IRepository<String, Order> {


	ArrayList<Order> getByUserId(int id);

	ArrayList<Order> getByRestaurantId(int id);
}