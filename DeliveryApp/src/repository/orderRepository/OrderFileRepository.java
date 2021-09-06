/***********************************************************************
 * Module:  OrderFileRepository.java
 * Author:  Luka
 * Purpose: Defines the Class OrderFileRepository
 ***********************************************************************/
package repository.orderRepository;

import java.io.FileWriter;
import java.io.IOException;
import java.lang.reflect.Type;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

import model.Article;
import model.Order;
import repository.IFileRepository;

/** @pdOid 108a684d-6026-4cc7-b05f-6ef76600aa2b */
public class OrderFileRepository implements IOrderRepository, IFileRepository<Order> {
   /** @pdOid aa986525-27f5-404b-beee-105356269555 */
   private String path;

	@Override
	public Order getById(String key) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public ArrayList<Order> getAll() {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public Order save(Order value) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public Order update(Order value) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public Boolean delete(String key) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public boolean writeToFile(ArrayList<Order> values) {
		Gson gson = new Gson();
        String json = gson.toJson(values);
        FileWriter fileWriter = null;

        try {
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
	public ArrayList<Order> readFromFile() {
		Gson gson = new Gson();

        try {
            String json = new String(Files.readAllBytes(Paths.get(path)));

            Type listType = new TypeToken<ArrayList<Order>>(){}.getType();
            return gson.fromJson(json, listType);
        } catch (IOException e) {
            e.printStackTrace();
        }
        
        return null;
	}

}