/***********************************************************************
 * Module:  AdminFileRepository.java
 * Author:  Luka
 * Purpose: Defines the Class AdminFileRepository
 ***********************************************************************/
package repository.adminRepository;

import java.util.ArrayList;

import model.Admin;
import repository.IFileRepository;

/** @pdOid d7a2b040-ccde-4a9c-adda-bb8bb698a7de */
public class AdminFileRepository implements IAdminRepository, IFileRepository<Admin> {
   /** @pdOid 7d20d403-fe91-48ec-a71a-de160e592732 */
   private String path;

	@Override
	public Admin getById(String key) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public ArrayList<Admin> getAll() {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public Boolean save(Admin value) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public Boolean update(Admin value) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public Boolean delete(String key) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public boolean writeToFile(ArrayList<Admin> values) {
		// TODO Auto-generated method stub
		return false;
	}
	
	@Override
	public ArrayList<Admin> readFromFile() {
		// TODO Auto-generated method stub
		return null;
	}

}