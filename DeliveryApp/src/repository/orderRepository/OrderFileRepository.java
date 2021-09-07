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
import java.util.Date;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

import model.Article;
import model.ArticleSize;
import model.ArticleType;
import model.CartItem;
import model.Order;
import model.OrderStatus;
import model.Unit;
import repository.IFileRepository;
import repository.customerRepository.CustomerFileRepository;

/** @pdOid 108a684d-6026-4cc7-b05f-6ef76600aa2b */
public class OrderFileRepository implements IOrderRepository, IFileRepository<Order> {
   /** @pdOid aa986525-27f5-404b-beee-105356269555 */
   private String path = "FileStorage/orders.json";

	@Override
	public Order getById(String key) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public ArrayList<Order> getAll() {
		return this.readFromFile();
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


	@Override
	public ArrayList<Order> getByUserId(int id) {
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
		items1.add(new CartItem(a4, 4));
		ArrayList<CartItem> items2 = new ArrayList<CartItem>();
		items2.add(new CartItem(a2, 5));
		items2.add(new CartItem(a9, 1));
		Order o1 = new Order("0000000001", items1, 0, System.currentTimeMillis(), 1620.00, 2, OrderStatus.PROCESSING);
		Order o2 = new Order("0000000002", items2, 1, System.currentTimeMillis(), 1020.00, 2, OrderStatus.DELIVERED);
		Order o4 = new Order("0000000004", items2, 1, System.currentTimeMillis(), 1020.00, 1, OrderStatus.IN_TRANSPORT);
		Order o3 = new Order("0000000003",  items1, 0, System.currentTimeMillis(), 460.00, 2, OrderStatus.IN_PREPARATION);*/
		ArrayList<Order> allOrders = this.readFromFile();
		ArrayList<Order> orders = new ArrayList<Order>();
		/*allOrders.add(o1);
		allOrders.add(o2);
		allOrders.add(o3);
		allOrders.add(o4);
		this.writeToFile(allOrders);*/
		for (Order o : allOrders) {
			if(o.getCustomerId() == id) {
				orders.add(o);
			}
		}
		return orders;
	}
	
	@Override
	public ArrayList<Order> getByRestaurantId(int id) {
		ArrayList<Order> allOrders = this.readFromFile();
		ArrayList<Order> orders = new ArrayList<Order>();
		for (Order o : allOrders) {
			if(o.getRestaurantId() == id) {
				orders.add(o);
			}
		}
		return orders;
	}

}