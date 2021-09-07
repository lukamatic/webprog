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
		ArrayList<Customer> customers = getAll();
		
		for (Customer customer : customers) {
			if (customer.getId() == key) {
				return customer;
			}
		}
		
		return null;
	}
	
	@Override
	public ArrayList<Customer> getAll() {
		return readFromFile();
	}
	
	@Override
	public Customer save(Customer value) {
		// TODO Auto-generated method stub
		return null;
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
	public Customer update(User value) {
		ArrayList<Customer> customers = getAll();

		for (int i = 0; i < customers.size(); i++) {
			if (customers.get(i).getId() == value.getId()) {
				customers.get(i).setFirstName(value.getFirstName());
				customers.get(i).setLastName(value.getLastName());
				customers.get(i).setUsername(value.getUsername());
				customers.get(i).setGender(value.getGender());
				customers.get(i).setPassword(value.getPassword());
				writeToFile(customers);
				return customers.get(i);
			}
		}
		
		return (Customer) value;
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
	
	@Override
	public Customer updateCart(int id, Cart cart) {
		
		/*Article a1 = new Article(0, "Pastrmka", 570.0 , ArticleType.FOOD, 0, "Pecena pastrmka posluzena sa krompir salatom i tzatziki sosom.", "", false, new ArticleSize(400, Unit.GRAMS));
		Article a2 = new Article(1, "Pizza capricciosa", 320.0 , ArticleType.FOOD, 1, "Pelat, origano, sunka, kackavalj, sampinjoni, masline", "", false, null);
		Article a3 = new Article(2, "Belo meso u prezli", 400.0 , ArticleType.FOOD, 0, "Belo meso pohovano u prezli sa pomfritom", "", false, new ArticleSize(500, Unit.GRAMS));
		Article a4 = new Article(3, "Limunada", 170.0 , ArticleType.DRINK, 0, "Domace cedjena limunada", "", false, new ArticleSize(300, Unit.MILILITERS));
		Article a5 = new Article(4, "Staropramen", 290.0 , ArticleType.DRINK, 0, "", "", false, new ArticleSize(500, Unit.MILILITERS));
		Article a6 = new Article(5, "Karadjordjeva snicla", 630.0 , ArticleType.FOOD, 0, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "", false, null);
		Article a7 = new Article(6, "Riba", 570.0 , ArticleType.FOOD, 0, "Pecena riba posluzena sa krompir salatom i tzatziki sosom.", "", true, new ArticleSize(400, Unit.GRAMS));
		Article a8 = new Article(7, "Spaghetti bolognese", 570.0 , ArticleType.FOOD, 0, "Al dente kuvana testenina spaghetti sa bolognese sosom", "", false, new ArticleSize(400, Unit.GRAMS));
		Article a9 = new Article(8, "Pizza margarita", 240.0 , ArticleType.FOOD, 1, "Pelat, origano, kackavalj", "", false, new ArticleSize(400, Unit.GRAMS));

		ArrayList<CartItem> items1 = new ArrayList<CartItem>();
		items1.add(new CartItem(a3, 2));
		items1.add(new CartItem(a1, 2));
		items1.add(new CartItem(a4, 4));*/
		
		ArrayList<Customer> customers = getAll();

		for (int i = 0; i < customers.size(); i++) {
			if (customers.get(i).getId() == id) {
				/*customers.get(i).getCart().getItems().add(new CartItem(a3, 2));
				customers.get(i).getCart().getItems().add(new CartItem(a1, 2));
				customers.get(i).getCart().getItems().add(new CartItem(a4, 4));
				customers.get(i).getCart().setCustomerId(id);
				this.writeToFile(customers);*/
				
				customers.get(i).setCart(cart);
				
				return customers.get(i);
			}
		}
		
		return null;
	}

}