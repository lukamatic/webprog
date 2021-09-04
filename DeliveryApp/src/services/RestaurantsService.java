package services;

import java.util.ArrayList;

import javax.ws.rs.BadRequestException;

import model.Location;
import model.Restaurant;
import model.RestaurantType;
import repository.restaurantRepository.IRestaurantRepository;
import repository.restaurantRepository.RestaurantFileRepository;

public class RestaurantsService {
	private IRestaurantRepository restaurantRepository;
	
	public RestaurantsService() {
		restaurantRepository = new RestaurantFileRepository();
	}
	
	public ArrayList<Restaurant> getAll() {
		return restaurantRepository.getAll();
	}
	
	public Restaurant getById(Integer key) {
		return restaurantRepository.getById(key);
	}
	
	public ArrayList<Restaurant> filterByName(ArrayList<Restaurant> restaurants, String name) {
		name = name.toLowerCase();
		
		for (int i = 0; i < restaurants.size(); i++) {
			if (!restaurants.get(i).getName().toLowerCase().contains(name)) {
				restaurants.remove(i);
				i--;
			}
		}
		
		return restaurants;
	}
	
	public ArrayList<Restaurant> filterByType(ArrayList<Restaurant> restaurants, String type) throws BadRequestException {
		type = type.toLowerCase();
		
		if (type.equals("any")) {
			return restaurants;
		}
		
		RestaurantType restaurantType = getTypeFromTypeString(type);
		
		for (int i = 0; i < restaurants.size(); i++) {
			if (restaurants.get(i).getRestaurantType() != restaurantType) {
				restaurants.remove(i);
				i--;
			}
		}
		
		return restaurants;
	}
	
	private RestaurantType getTypeFromTypeString(String typeStr) throws BadRequestException {
		switch (typeStr.toLowerCase()) {
		case "grill":
			return RestaurantType.GRILL;
		case "italian":
			return RestaurantType.ITALIAN;
		case "chinese":
			return RestaurantType.CHINESE;
		case "vegan":
			return RestaurantType.VEGAN;
		default:
			throw new BadRequestException("Restaurant type " + typeStr + "doesn't exist.");
		}
	}
	
	public ArrayList<Restaurant> filterByLocation(ArrayList<Restaurant> restaurants, String location) {
		location = location.toLowerCase();
		
		for (int i = 0; i < restaurants.size(); i++) {
			if (!restaurants.get(i).getLocation().getAddress().getCity().toLowerCase().contains(location)
					&& !restaurants.get(i).getLocation().getAddress().getCountry().toLowerCase().contains(location)) {
				restaurants.remove(i);
				i--;
			}
		}
		
		return restaurants;
	}
	
	public ArrayList<Restaurant> filterByAverageRating(ArrayList<Restaurant> restaurants, double from, double to) {
		// TODO
		
		return restaurants;
	}
}
