/***********************************************************************
 * Module:  CostumerFileRepository.java
 * Author:  Luka
 * Purpose: Defines the Class CostumerFileRepository
 ***********************************************************************/
package repository.customerRepository;

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
import model.Article;
import model.ArticleSize;
import model.ArticleType;
import model.Cart;
import model.CartItem;
import model.Customer;
import model.Deliverer;
import model.Manager;
import model.Unit;
import model.User;
import repository.IFileRepository;

/** @pdOid 45ff99cf-8507-454a-a449-22e68cdf4e98 */
public class CustomerFileRepository implements ICustomerRepository, IFileRepository<Customer> {
   /** @pdOid af983eac-f79e-4dc6-b3a7-cbc6af3392ea */
	private String path = "FileStorage/customers.json";

	@Override
	public Customer getById(Integer key) {
		ArrayList<Customer> customers = readFromFile();
		
		for (Customer customer : customers) {
			if (customer.getId() == key) {
				return customer;
			}
		}
		
		return null;
	}
	
	@Override
	public ArrayList<Customer> getAll() {
		ArrayList<Customer> allCustomers = readFromFile();
		ArrayList<Customer> customers = new ArrayList<Customer>();
		for (int i = 0; i < allCustomers.size(); i++) {
			if (allCustomers.get(i).isDeleted() == false) {
				customers.add(allCustomers.get(i));
			}
		}
		return customers;
	}
	
	@Override
	public Customer save(Customer value) {
		ArrayList<Customer> customers = readFromFile();
		customers.add(value);
		writeToFile(customers);
		return value;
	}
	
	@Override
	public Customer update(Customer value) {
		ArrayList<Customer> customers = getAll();

		for (int i = 0; i < customers.size(); i++) {
			if (customers.get(i).getId() == value.getId()) {
				customers.set(i, value);
			}
		}
		
		writeToFile(customers);
		return value;
	}
	
	@Override
	public Boolean delete(Integer key) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public boolean writeToFile(ArrayList<Customer> values) {
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
	public ArrayList<Customer> readFromFile() {
		Gson gson = new Gson();

        try {
            String json = new String(Files.readAllBytes(Paths.get(path)));

            Type listType = new TypeToken<ArrayList<Customer>>(){}.getType();
            return gson.fromJson(json, listType);
        } catch (IOException e) {
            e.printStackTrace();
        }
        
        return null;
	}
	
	

}