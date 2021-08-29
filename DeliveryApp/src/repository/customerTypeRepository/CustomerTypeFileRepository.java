/***********************************************************************
 * Module:  CostumerTypeFileRepository.java
 * Author:  Luka
 * Purpose: Defines the Class CostumerTypeFileRepository
 ***********************************************************************/
package repository.customerTypeRepository;

import java.util.ArrayList;

import model.CustomerType;
import repository.IFileRepository;

/** @pdOid 4f54a300-a42d-493c-ad9c-cc0aba410e65 */
public class CustomerTypeFileRepository implements ICustomerTypeRepository, IFileRepository<CustomerType> {
   /** @pdOid 942f19a9-dca0-4ead-9116-7588774f7276 */
   private String path;

	@Override
	public CustomerType getById(String key) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public ArrayList<CustomerType> getAll() {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public CustomerType save(CustomerType value) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public CustomerType update(CustomerType value) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public Boolean delete(String key) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public boolean writeToFile(ArrayList<CustomerType> values) {
		// TODO Auto-generated method stub
		return false;
	}
	
	@Override
	public ArrayList<CustomerType> readFromFile() {
		// TODO Auto-generated method stub
		return null;
	}

}