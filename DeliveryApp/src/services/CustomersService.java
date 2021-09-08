package services;

import java.util.ArrayList;

import model.Cart;
import model.CartItem;
import model.Customer;
import model.User;
import repository.customerRepository.CustomerFileRepository;
import repository.customerRepository.ICustomerRepository;

public class CustomersService {
	private ICustomerRepository customerRepository;
	private UsersService usersService;
	
	public CustomersService() {
		customerRepository = new CustomerFileRepository();
	}
	
	public ArrayList<Customer> getAll() {
		return customerRepository.getAll();
	}

	public Customer updateProfile(User user) {
		//usersService.validateUsername(user.getUsername());
		Customer customer = customerRepository.getById(user.getId());
		customer.setFirstName(user.getFirstName());
		customer.setLastName(user.getLastName());
		customer.setUsername(user.getUsername());
		customer.setGender(user.getGender());
		customer.setPassword(user.getPassword());
			
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

}
