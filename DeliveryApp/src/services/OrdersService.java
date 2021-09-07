package services;

import java.util.ArrayList;

import javax.ws.rs.BadRequestException;

import model.Order;
import model.Restaurant;
import model.RestaurantType;
import repository.orderRepository.IOrderRepository;
import repository.orderRepository.OrderFileRepository;


public class OrdersService {
private IOrderRepository orderRepository;
	
	public OrdersService() {
		orderRepository = new OrderFileRepository();
	}
	
	public ArrayList<Order> getByUserId(int id) {
		return orderRepository.getByUserId(id);
	}
	
	public ArrayList<Order> getByRestaurantId(int id) {
		return orderRepository.getByRestaurantId(id);
	}

	public ArrayList<Order> getAll() {
		return orderRepository.getAll();
	}

	public void filterByRestaurantName(ArrayList<Order> orders, String name) {
		name = name.toLowerCase().trim();
		for (int i = 0; i < orders.size(); i++) {
			RestaurantsService rs = new RestaurantsService();
			if (!(rs.getById(orders.get(i).getRestaurantId()).getName().contains(name))) {
				orders.remove(i);
				i--;
			}
		}
	}
	
	public void filterByPrice(ArrayList<Order> orders, Double lowestPrice, Double highestPrice) {
		for (int i = 0; i < orders.size(); i++) {
			if ((lowestPrice != null && orders.get(i).getPrice() < lowestPrice) || (highestPrice != null && orders.get(i).getPrice() > highestPrice)) {
				orders.remove(i);
				i--;
			}
		}
	}

	public void filterByDate(ArrayList<Order> orders, long startDate, long endDate) {
		for (int i = 0; i < orders.size(); i++) {
			if ((orders.get(i).getDateTimeCreated() < startDate) || (orders.get(i).getDateTimeCreated() > endDate)) {
				orders.remove(i);
				i--;
			}
		}
		
	}
}
