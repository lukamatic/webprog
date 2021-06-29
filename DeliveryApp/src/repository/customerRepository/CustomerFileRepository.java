/***********************************************************************
 * Module:  CostumerFileRepository.java
 * Author:  Luka
 * Purpose: Defines the Class CostumerFileRepository
 ***********************************************************************/
package repository.customerRepository;

import java.util.ArrayList;

import model.Customer;
import repository.IFileRepository;

/** @pdOid 45ff99cf-8507-454a-a449-22e68cdf4e98 */
public class CustomerFileRepository implements ICustomerRepository, IFileRepository<Customer> {
   /** @pdOid af983eac-f79e-4dc6-b3a7-cbc6af3392ea */
   private String path;

	@Override
	public Customer getById(String key) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public ArrayList<Customer> getAll() {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public Boolean save(Customer value) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public Boolean update(Customer value) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public Boolean delete(String key) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public boolean writeToFile(ArrayList<Customer> values) {
		// TODO Auto-generated method stub
		return false;
	}
	
	@Override
	public ArrayList<Customer> readFromFile() {
		// TODO Auto-generated method stub
		return null;
	}

}