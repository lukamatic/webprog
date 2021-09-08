/***********************************************************************
 * Module:  RestaurantFileRepository.java
 * Author:  Luka
 * Purpose: Defines the Class RestaurantFileRepository
 ***********************************************************************/
package repository.restaurantRepository;

import java.io.FileWriter;
import java.io.IOException;
import java.lang.reflect.Type;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

import model.Deliverer;
import model.Restaurant;
import repository.IFileRepository;

/** @pdOid 344267d5-4029-48b5-bac0-95bf6e85e30e */
public class RestaurantFileRepository implements IRestaurantRepository, IFileRepository<Restaurant> {
   /** @pdOid 6bf14630-6e6f-47b8-a8f8-59fbcc143a51 */
   private String path = "FileStorage/restaurants.json";

	@Override
	public Restaurant getById(Integer key) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public ArrayList<Restaurant> getAll() {
		return readFromFile();
	}
	
	@Override
	public Restaurant save(Restaurant value) {
		ArrayList<Restaurant> restaurants = getAll();
		restaurants.add(value);
		writeToFile(restaurants);
		return value;
	}
	
	@Override
	public Restaurant update(Restaurant value) {
		ArrayList<Restaurant> restaurants = getAll();

		for (int i = 0; i < restaurants.size(); i++) {
			if (restaurants.get(i).getId() == value.getId()) {
				restaurants.set(i, value);
			}
		}
		
		writeToFile(restaurants);
		return value;
	}
	
	@Override
	public Boolean delete(Integer key) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public boolean writeToFile(ArrayList<Restaurant> values) {
		Gson gson = new Gson();
        String json = gson.toJson(values);

        FileWriter fileWriter = null;

        try {
            //System.out.println(Paths.get(path).toAbsolutePath().toString());
            fileWriter = new FileWriter(path, StandardCharsets.UTF_8);
            fileWriter.write(json);
            fileWriter.flush();
            fileWriter.close();
            return true;
        } catch (Exception e) {
            e.printStackTrace();
        }
        
        return false;
	}
	
	@Override
	public ArrayList<Restaurant> readFromFile() {
		Gson gson = new Gson();

        try {
            String json = new String(Files.readAllBytes(Paths.get(path)));

            Type listType = new TypeToken<ArrayList<Restaurant>>(){}.getType();
            return gson.fromJson(json, listType);
        } catch (IOException e) {
            e.printStackTrace();
        }
        
        return null;
	}

}