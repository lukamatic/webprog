package services;

import java.util.ArrayList;

import model.Customer;
import model.Manager;
import repository.customerRepository.CustomerFileRepository;
import repository.customerRepository.ICustomerRepository;

public class CustomersService {
	private ICustomerRepository customerRepository;
	
	public CustomersService() {
		customerRepository = new CustomerFileRepository();
	}
	
	public ArrayList<Customer> getAll() {
		return customerRepository.getAll();
	}
}
