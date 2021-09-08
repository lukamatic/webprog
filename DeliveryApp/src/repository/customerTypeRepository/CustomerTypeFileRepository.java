/***********************************************************************
 * Module:  CostumerTypeFileRepository.java
 * Author:  Luka
 * Purpose: Defines the Class CostumerTypeFileRepository
 ***********************************************************************/
package repository.customerTypeRepository;

import java.io.FileWriter;
import java.io.IOException;
import java.lang.reflect.Type;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

import model.CustomerType;
import model.CustomerTypeName;
import model.Order;
import repository.IFileRepository;

/** @pdOid 4f54a300-a42d-493c-ad9c-cc0aba410e65 */
public class CustomerTypeFileRepository implements ICustomerTypeRepository, IFileRepository<CustomerType> {
   /** @pdOid 942f19a9-dca0-4ead-9116-7588774f7276 */
   private String path = "FileStorage/customer-types.json";

	@Override
	public CustomerType getById(String key) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public ArrayList<CustomerType> getAll() {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public CustomerType save(CustomerType value) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public CustomerType update(CustomerType value) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public Boolean delete(String key) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public boolean writeToFile(ArrayList<CustomerType> values) {
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
	public ArrayList<CustomerType> readFromFile() {
		Gson gson = new Gson();

        try {
            String json = new String(Files.readAllBytes(Paths.get(path)));

            Type listType = new TypeToken<ArrayList<CustomerType>>(){}.getType();
            return gson.fromJson(json, listType);
        } catch (IOException e) {
            e.printStackTrace();
        }
        
        return null;
	}
	
	public CustomerType getBasedOnPoints(double points) {
		ArrayList<CustomerType> types = this.readFromFile();
		if(types.size()<1) {
			return null;
		}
		CustomerType curr = new CustomerType(CustomerTypeName.BRONZE, 0, 0);
		for(int i = 0 ; i < types.size(); i++) {
			if(points > types.get(i).getPointsRequired() && types.get(i).getPointsRequired() > curr.getPointsRequired()) {
				curr = types.get(i);
			}
		}
		System.out.println(curr.getCustomerTypeName());
		return curr;
	}

}