/***********************************************************************
 * Module:  ManagerFileRepository.java
 * Author:  Luka
 * Purpose: Defines the Class ManagerFileRepository
 ***********************************************************************/
package repository.managerRepository;

import java.util.ArrayList;

import model.Manager;
import repository.IFileRepository;

/** @pdOid 3788b6b5-fbdd-42aa-9273-55fa10a5def7 */
public class ManagerFileRepository implements IManagerRepository, IFileRepository<Manager> {
   /** @pdOid 4eeac8d7-3c0c-46ef-aa3b-5e24ffa6ba28 */
   private String path;

	@Override
	public Manager getById(String key) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public ArrayList<Manager> getAll() {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public Boolean save(Manager value) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public Boolean update(Manager value) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public Boolean delete(String key) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public boolean writeToFile(ArrayList<Manager> values) {
		// TODO Auto-generated method stub
		return false;
	}
	
	@Override
	public ArrayList<Manager> readFromFile() {
		// TODO Auto-generated method stub
		return null;
	}

}