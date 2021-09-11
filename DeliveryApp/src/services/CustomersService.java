package services;

import java.util.ArrayList;

import model.Cart;
import model.CartItem;
import model.Customer;
import model.Deliverer;
import model.Order;
import model.User;
import repository.customerRepository.CustomerFileRepository;
import repository.customerRepository.ICustomerRepository;
import repository.customerTypeRepository.CustomerTypeFileRepository;

public class CustomersService {
	private ICustomerRepository customerRepository;
	private UsersService usersService;
	private OrdersService ordersService;
	
	public CustomersService() {
		customerRepository = new CustomerFileRepository();
		usersService = new UsersService();
		ordersService = new OrdersService();
	}
	
	public Customer getById(int id) {
		return customerRepository.getById(id);
	}
	
	public ArrayList<Customer> getAll() {
		return customerRepository.getAll();
	}

	public Customer create(Customer customer) {
		usersService.validateUsername(customer.getUsername());
		customer.setId(usersService.calculateId());
		return customerRepository.save(customer);
	}

	public Customer updateProfile(User user) {
		//usersService.validateUsername(user.getUsername());
		Customer customer = customerRepository.getById(user.getId());
		customer.setFirstName(user.getFirstName());
		customer.setLastName(user.getLastName());
		customer.setGender(user.getGender());
		customer.setPassword(user.getPassword());
		if(!customer.getUsername().equals(user.getUsername())) {
			usersService.validateUsername(user.getUsername());
			customer.setUsername(user.getUsername());
		}
		
			
		return customerRepository.update(customer);
	}

	public Customer updateCart(Cart cart) {
		Customer customer = customerRepository.getById(cart.getCustomerId());
		customer.setCart(cart);
		return customerRepository.update(customer);
	}

	public void addToCart(CartItem addedItem, int id) {
		Customer customer = customerRepository.getById(id);
		Cart cart = customer.getCart();
		//isprazni ako nije isti restoran
		if(cart.getItems().size() > 0 && cart.getItems().get(0).getArticle().getRestaurantId() != addedItem.getArticle().getRestaurantId()) {
			cart = new Cart(customer.getId());
		}
		
		boolean isInCart = false;
		for (int i = 0; i < cart.getItems().size(); i++) {
			if(cart.getItems().get(i).getArticle().getId() == addedItem.getArticle().getId()) {
				isInCart = true;
				cart.getItems().get(i).setCount(cart.getItems().get(i).getCount() + addedItem.getCount());
				break;
			}
		}
		if (!isInCart) {
			cart.getItems().add(addedItem);
		}
		this.updateCart(cart);
			
	}

	public void updatePoints(int id, double points) {
		Customer customer = customerRepository.getById(id);
		
		if((customer.getPoints() + points) > 0) {
			customer.setPoints(customer.getPoints() + points);
		} else {
			customer.setPoints(0.0);
		}
		CustomerTypeFileRepository typeRepo = new CustomerTypeFileRepository();
		customer.setCustomerType(typeRepo.getBasedOnPoints(customer.getPoints()));
		customerRepository.update(customer);
	}

	public void AddCustomerOrder(int customerId, String orderId) {
		Customer customer = customerRepository.getById(customerId);
		customer.getOrders().add(orderId);
		customerRepository.update(customer);
		
	}

	public ArrayList<Customer> getRestaurantCustomers(int restaurantId) {
		ArrayList<Customer> customers = new ArrayList<Customer>();
		
		for (Customer customer : getAll()) {
			for (String orderId : customer.getOrders()) {
				Order order = ordersService.getById(orderId);
				
				if (order.getRestaurantId() == restaurantId) {
					customers.add(customer);
					break;
				}
			}
		}
		
		return customers;
	}
	
	public void markAsSuspicious(int customerId) {
		Customer customer = getById(customerId);
		customer.setSuspicious(true);
		customerRepository.update(customer);
	}
}
