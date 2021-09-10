package services;

import java.util.ArrayList;

import javax.ws.rs.BadRequestException;

import model.Cart;
import model.Deliverer;
import model.Order;
import model.OrderStatus;
import model.Restaurant;
import model.RestaurantType;
import model.User;
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

	public Order getById(String id) {
		return orderRepository.getById(id);
	}
	
	public ArrayList<Order> getAll() {
		return orderRepository.getAll();
	}

	public void filterByRestaurantName(ArrayList<Order> orders, String name) {
		name = name.toLowerCase().trim();
		for (int i = 0; i < orders.size(); i++) {
			RestaurantsService rs = new RestaurantsService();
			if (!(rs.getById(orders.get(i).getRestaurantId()).getName().toLowerCase().contains(name))) {
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
	
	private String calculateId() {
		ArrayList<Order> orders = getAll();
		
		if (orders.size() == 0) {
			return "0000000000";
		}
		int newIdInt = getMaxId(orders) + 1;
		String idStr = String.valueOf(newIdInt);
		    StringBuilder sb = new StringBuilder();
		for(int i = 0 ; i < 10-idStr.length(); i++) {
		    sb.append("0");
		}
		sb.append(idStr);
		return sb.toString();
	}
	
	private int getMaxId(ArrayList<Order> orders) {
		int maxId = Integer.parseInt(orders.get(0).getId());
		
		for (Order order : orders) {
			int id = Integer.parseInt(order.getId());
			if (id > maxId) {
				maxId = id;
			}
		}
		
		return maxId;
	}
	
	public void createOrder(Cart cart) {
		Order order = new Order(this.calculateId(), cart.getItems(), cart.getPrice(), cart.getCustomerId());
		orderRepository.save(order);
		double points = order.getPrice() * 133 / 1000;
		CustomersService cs = new CustomersService();
		cs.AddCustomerOrder(order.getCustomerId(), order.getId());
		cs.updatePoints(order.getCustomerId(), points);
	}

	public void cancelOrder(String id) {
		Order order = orderRepository.getById(id);
		order.setOrderStatus(OrderStatus.CANCELED);
		orderRepository.update(order);
		double points = -1 * order.getPrice() * 133 * 4 / 1000;
		CustomersService cs = new CustomersService();
		cs.updatePoints(order.getCustomerId(), points);
	}

	public ArrayList<Order> getByDeliverer(int id) {
		ArrayList<Order> orders = new ArrayList<Order>();
		Deliverer d = (new DeliverersService()).getById(id);
		for(String orderId : d.getOrdersToDeliver()) {
			orders.add(this.getById(orderId));
		}
		
		return orders;
	}

	public ArrayList<Order> getByStatus(OrderStatus status) {
		ArrayList<Order> allOrders = getAll();
		ArrayList<Order> orders = new ArrayList<Order>();
		for(Order order : allOrders) {
			if(order.getOrderStatus() == status) {
				orders.add(order);
			}
			
		}
		return orders;
	}

	public void deliverOrder(String id) {

		Order order = orderRepository.getById(id);
		order.setOrderStatus(OrderStatus.DELIVERED);
		orderRepository.update(order);
		
	}

	public void applyForDelivery(String orderId, int delivererId) {
		Order order = orderRepository.getById(orderId);
		order.getDeliverers().add(delivererId);
		orderRepository.update(order);
		
	}

	public void startPreparation(String id) {
		Order order = orderRepository.getById(id);
		order.setOrderStatus(OrderStatus.IN_PREPARATION);
		orderRepository.update(order);
		
	}
	
	public void finishPreparation(String id) {
		Order order = orderRepository.getById(id);
		order.setOrderStatus(OrderStatus.WAITING_FOR_DELIVERY);
		orderRepository.update(order);
		
	}
	
	
}
