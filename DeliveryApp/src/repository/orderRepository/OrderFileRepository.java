/***********************************************************************
 * Module:  OrderFileRepository.java
 * Author:  Luka
 * Purpose: Defines the Class OrderFileRepository
 ***********************************************************************/
package repository.orderRepository;

import java.util.ArrayList;

import model.Order;
import repository.IFileRepository;

/** @pdOid 108a684d-6026-4cc7-b05f-6ef76600aa2b */
public class OrderFileRepository implements IOrderRepository, IFileRepository<Order> {
   /** @pdOid aa986525-27f5-404b-beee-105356269555 */
   private String path;

	@Override
	public Order getById(String key) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public ArrayList<Order> getAll() {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public Boolean save(Order value) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public Boolean update(Order value) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public Boolean delete(String key) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public boolean writeToFile(ArrayList<Order> values) {
		// TODO Auto-generated method stub
		return false;
	}
	
	@Override
	public ArrayList<Order> readFromFile() {
		// TODO Auto-generated method stub
		return null;
	}

}