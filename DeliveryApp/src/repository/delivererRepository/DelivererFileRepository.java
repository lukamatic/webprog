/***********************************************************************
 * Module:  DelivererFileRepository.java
 * Author:  Luka
 * Purpose: Defines the Class DelivererFileRepository
 ***********************************************************************/
package repository.delivererRepository;

import java.util.ArrayList;

import model.Deliverer;
import repository.IFileRepository;

/** @pdOid 818576d7-14b1-4a5e-94aa-35890e8e03b9 */
public class DelivererFileRepository implements IDelivererRepository, IFileRepository<Deliverer> {
   /** @pdOid 0b56c35b-ba31-486a-a1c8-bedf6f712a9b */
   private String path;

	@Override
	public Deliverer getById(String key) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public ArrayList<Deliverer> getAll() {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public Boolean save(Deliverer value) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public Boolean update(Deliverer value) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public Boolean delete(String key) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public boolean writeToFile(ArrayList<Deliverer> values) {
		// TODO Auto-generated method stub
		return false;
	}
	
	@Override
	public ArrayList<Deliverer> readFromFile() {
		// TODO Auto-generated method stub
		return null;
	}

}