package services;

import java.util.ArrayList;

import model.Order;
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
}
