/***********************************************************************
 * Module:  DelivererFileRepository.java
 * Author:  Luka
 * Purpose: Defines the Class DelivererFileRepository
 ***********************************************************************/
package repository.delivererRepository;

import java.io.FileWriter;
import java.io.IOException;
import java.lang.reflect.Type;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

import model.Deliverer;
import model.Manager;
import repository.IFileRepository;

/** @pdOid 818576d7-14b1-4a5e-94aa-35890e8e03b9 */
public class DelivererFileRepository implements IDelivererRepository, IFileRepository<Deliverer> {
   /** @pdOid 0b56c35b-ba31-486a-a1c8-bedf6f712a9b */
	private String path = "FileStorage/deliverers.json";

	@Override
	public Deliverer getById(Integer key) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public ArrayList<Deliverer> getAll() {
		return readFromFile();
	}
	
	@Override
	public Deliverer save(Deliverer value) {
		ArrayList<Deliverer> deliverers = getAll();
		deliverers.add(value);
		writeToFile(deliverers);
		return value;
	}
	
	@Override
	public Deliverer update(Deliverer value) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public Boolean delete(Integer key) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public boolean writeToFile(ArrayList<Deliverer> values) {
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
	public ArrayList<Deliverer> readFromFile() {
		Gson gson = new Gson();

        try {
            String json = new String(Files.readAllBytes(Paths.get(path)));

            Type listType = new TypeToken<ArrayList<Deliverer>>(){}.getType();
            return gson.fromJson(json, listType);
        } catch (IOException e) {
            e.printStackTrace();
        }
        
        return null;
	}

}