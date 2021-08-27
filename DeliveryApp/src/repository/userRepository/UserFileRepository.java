/***********************************************************************
 * Module:  UserFileRepository.java
 * Author:  Luka
 * Purpose: Defines the Class UserFileRepository
 ***********************************************************************/
package repository.userRepository;

import java.io.FileWriter;
import java.io.IOException;
import java.lang.reflect.Type;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

import model.User;
import repository.IFileRepository;

/** @pdOid 6e8e5f65-abf8-4c4f-ba57-53b5f47aa03e */
public class UserFileRepository implements IUserRepository, IFileRepository<User> {
   /** @pdOid 190d0416-d050-4255-8fb4-ea1bea924e0f */
   private String path = "FileStorage/users.json";

	@Override
	public User getById(Integer key) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public ArrayList<User> getAll() {
		return readFromFile();
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
	public Boolean delete(Integer key) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean writeToFile(ArrayList<User> values) {
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
	public ArrayList<User> readFromFile() {
		Gson gson = new Gson();

        try {
            String json = new String(Files.readAllBytes(Paths.get(path)));

            Type listType = new TypeToken<ArrayList<User>>(){}.getType();
            return gson.fromJson(json, listType);
        } catch (IOException e) {
            e.printStackTrace();
        }
        
        return null;
	}

}