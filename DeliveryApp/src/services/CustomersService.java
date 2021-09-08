package services;

import java.util.ArrayList;

import model.Cart;
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
		return customerRepository.updateProfile(user);
	}

	public Customer updateCart(Cart cart) {
		return customerRepository.updateCart(cart);
	}

}
