package services;

import java.util.ArrayList;

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

	public Customer update(User user) {
		//usersService.validateUsername(user.getUsername());
		return customerRepository.update(user);
	}

}
