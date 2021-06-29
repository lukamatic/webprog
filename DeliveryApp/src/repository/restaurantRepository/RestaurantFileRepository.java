/***********************************************************************
 * Module:  RestaurantFileRepository.java
 * Author:  Luka
 * Purpose: Defines the Class RestaurantFileRepository
 ***********************************************************************/
package repository.restaurantRepository;

import java.util.ArrayList;

import model.Restaurant;
import repository.IFileRepository;

/** @pdOid 344267d5-4029-48b5-bac0-95bf6e85e30e */
public class RestaurantFileRepository implements IRestaurantRepository, IFileRepository<Restaurant> {
   /** @pdOid 6bf14630-6e6f-47b8-a8f8-59fbcc143a51 */
   private String path;

	@Override
	public Restaurant getById(Integer key) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public ArrayList<Restaurant> getAll() {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public Boolean save(Restaurant value) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public Boolean update(Restaurant value) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public Boolean delete(Integer key) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public boolean writeToFile(ArrayList<Restaurant> values) {
		// TODO Auto-generated method stub
		return false;
	}
	
	@Override
	public ArrayList<Restaurant> readFromFile() {
		// TODO Auto-generated method stub
		return null;
	}

}