/***********************************************************************
 * Module:  UserFileRepository.java
 * Author:  Luka
 * Purpose: Defines the Class UserFileRepository
 ***********************************************************************/
package repository.userRepository;

import java.util.ArrayList;

import model.User;

/** @pdOid 6e8e5f65-abf8-4c4f-ba57-53b5f47aa03e */
public class UserFileRepository implements IUserRepository {
   /** @pdOid 190d0416-d050-4255-8fb4-ea1bea924e0f */
   private String path;

	@Override
	public User getById(String key) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public ArrayList<User> getAll() {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public Boolean save(User value) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public Boolean update(User value) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public Boolean delete(String key) {
		// TODO Auto-generated method stub
		return null;
	}

}