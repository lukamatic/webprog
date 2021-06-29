package services;

import java.util.ArrayList;

import model.Location;
import model.Restaurant;
import model.RestaurantType;
import repository.restaurantRepository.IRestaurantRepository;
import repository.restaurantRepository.RestaurantFileRepository;

public class RestaurantService {
	private IRestaurantRepository restaurantRepository;
	
	public RestaurantService() {
		restaurantRepository = new RestaurantFileRepository();
	}
	
	public ArrayList<Restaurant> getAll() {
		return restaurantRepository.getAll();
	}
}
