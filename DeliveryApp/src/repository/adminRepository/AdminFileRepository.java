/***********************************************************************
 * Module:  AdminFileRepository.java
 * Author:  Luka
 * Purpose: Defines the Class AdminFileRepository
 ***********************************************************************/
package repository.adminRepository;

import java.io.FileWriter;
import java.io.IOException;
import java.lang.reflect.Type;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

import model.Admin;
import repository.IFileRepository;

/** @pdOid d7a2b040-ccde-4a9c-adda-bb8bb698a7de */
public class AdminFileRepository implements IAdminRepository, IFileRepository<Admin> {
   /** @pdOid 7d20d403-fe91-48ec-a71a-de160e592732 */
	private String path = "FileStorage/admins.json";

	@Override
	public Admin getById(Integer key) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public ArrayList<Admin> getAll() {
		return readFromFile();
	}
	
	@Override
	public Boolean save(Admin value) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public Boolean update(Admin value) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public Boolean delete(Integer key) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public boolean writeToFile(ArrayList<Admin> values) {
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
	public ArrayList<Admin> readFromFile() {
		Gson gson = new Gson();

        try {
            String json = new String(Files.readAllBytes(Paths.get(path)));

            Type listType = new TypeToken<ArrayList<Admin>>(){}.getType();
            return gson.fromJson(json, listType);
        } catch (IOException e) {
            e.printStackTrace();
        }
        
        return null;
	}

}