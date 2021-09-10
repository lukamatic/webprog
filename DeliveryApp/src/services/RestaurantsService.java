package services;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.ArrayList;

import javax.ws.rs.WebApplicationException;

import org.glassfish.jersey.media.multipart.FormDataContentDisposition;

import exceptions.BadRequestException;
import model.Article;
import model.Manager;
import model.Restaurant;
import model.RestaurantType;
import model.User;
import repository.restaurantRepository.IRestaurantRepository;
import repository.restaurantRepository.RestaurantFileRepository;

public class RestaurantsService {
	private IRestaurantRepository restaurantRepository;
	private ManagersService managersService;
	
	public RestaurantsService() {
		restaurantRepository = new RestaurantFileRepository();
		managersService = new ManagersService();
	}
	
	public Restaurant create(InputStream fileInputStream, FormDataContentDisposition fileMetaData, Restaurant restaurant, int managerId) {
		validateManagerId(managerId);
		
		restaurant.setId(calculateId());
		
		if (fileMetaData.getFileName() != null) {
			validateImage(fileMetaData);
			String imageName = saveImage(fileInputStream, restaurant.getId(), getFileExtension(fileMetaData));
			restaurant.setLogoImageName(imageName);
		}
		
		managersService.assignRestaurantToManager(restaurant.getId(), managerId);
		
		return  restaurantRepository.save(restaurant);
	}
	
	private void validateManagerId(int managerId) {
		ArrayList<Manager> availableManagers = managersService.getAvailableManagers();
		
		for (Manager manager : availableManagers) {
			if (manager.getId() == managerId) {
				return;
			}
		}
		
		throw new BadRequestException("Manager unavailable.");
	}
	
	private void validateImage(FormDataContentDisposition fileMetaData) {
		String extension = getFileExtension(fileMetaData);
	    
	    if (!extension.equals("png") && !extension.equals("jpg") && !extension.equals("jpeg")) {
	    	throw new BadRequestException("Invalid image type. Only png, jpg and jpeg allowed.");
	    }
	}
	
	private String getFileExtension(FormDataContentDisposition fileMetaData) {
	    String[] parts = fileMetaData.getFileName().split("\\.");
	    return parts[parts.length - 1];
	}
	
	private String saveImage(InputStream fileInputStream, int restaurantId, String fileExtension) {
	    try
	    {
	    	String fileName = "r" + restaurantId + "." + fileExtension;
		    String filePath = "WebContent/Images/";
	        int read = 0;
	        byte[] bytes = new byte[1024];
	 
	        OutputStream out = new FileOutputStream(new File(filePath + fileName));
	        while ((read = fileInputStream.read(bytes)) != -1) 
	        {
	            out.write(bytes, 0, read);
	        }
	        out.flush();
	        out.close();
	        
	        return fileName;
	    } catch (IOException e) 
	    {
	        throw new WebApplicationException("Error while uploading file. Please try again.");
	    }
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
	
	private int calculateId() {
		ArrayList<Restaurant> restaurants = getAll();
		
		if (restaurants.size() == 0) {
			return 0;
		}
		
		return getMaxId(restaurants) + 1;
	}
	
	private int getMaxId(ArrayList<Restaurant> restaurants) {
		int maxId = (restaurants.get(0)).getId();
		
		for (Restaurant restaurant : restaurants) {
			int id = restaurant.getId();
			
			if (id > maxId) {
				maxId = id;
			}
		}
		
		return maxId;
	}
	
	public void addArticleToRestaurant(int articleId, int restaurantId) {
		Restaurant restaurant = getById(restaurantId);
		restaurant.getArticles().add(articleId);
	}
}
