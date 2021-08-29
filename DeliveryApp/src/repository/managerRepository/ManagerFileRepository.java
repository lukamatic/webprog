/***********************************************************************
 * Module:  ManagerFileRepository.java
 * Author:  Luka
 * Purpose: Defines the Class ManagerFileRepository
 ***********************************************************************/
package repository.managerRepository;

import java.io.FileWriter;
import java.io.IOException;
import java.lang.reflect.Type;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

import model.Manager;
import repository.IFileRepository;

/** @pdOid 3788b6b5-fbdd-42aa-9273-55fa10a5def7 */
public class ManagerFileRepository implements IManagerRepository, IFileRepository<Manager> {
   /** @pdOid 4eeac8d7-3c0c-46ef-aa3b-5e24ffa6ba28 */
	private String path = "FileStorage/managers.json";

	@Override
	public Manager getById(Integer key) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public ArrayList<Manager> getAll() {
		return readFromFile();
	}
	
	@Override
	public Manager save(Manager value) {
		ArrayList<Manager> managers = getAll();
		managers.add(value);
		writeToFile(managers);
		return value;
	}
	
	@Override
	public Manager update(Manager value) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public Boolean delete(Integer key) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public boolean writeToFile(ArrayList<Manager> values) {
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
	public ArrayList<Manager> readFromFile() {
		Gson gson = new Gson();

        try {
            String json = new String(Files.readAllBytes(Paths.get(path)));

            Type listType = new TypeToken<ArrayList<Manager>>(){}.getType();
            return gson.fromJson(json, listType);
        } catch (IOException e) {
            e.printStackTrace();
        }
        
        return null;
	}
}