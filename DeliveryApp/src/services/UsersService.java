package services;

import java.util.ArrayList;
import java.util.Date;

import model.Admin;
import model.Cart;
import model.Customer;
import model.CustomerType;
import model.CustomerTypeName;
import model.Deliverer;
import model.Gender;
import model.Manager;
import model.Restaurant;
import model.Role;
import model.User;
import repository.adminRepository.AdminFileRepository;
import repository.adminRepository.IAdminRepository;
import repository.customerRepository.CustomerFileRepository;
import repository.customerRepository.ICustomerRepository;
import repository.delivererRepository.DelivererFileRepository;
import repository.delivererRepository.IDelivererRepository;
import repository.managerRepository.IManagerRepository;
import repository.managerRepository.ManagerFileRepository;
import repository.userRepository.IUserRepository;
import repository.userRepository.UserFileRepository;

public class UsersService {
	private IAdminRepository adminRepository;
	private IManagerRepository managerRepository;
	private ICustomerRepository customerRepository;
	private IDelivererRepository delivererRepository;
	
	public UsersService() {
		adminRepository = new AdminFileRepository();
		managerRepository = new ManagerFileRepository();
		customerRepository = new CustomerFileRepository();
		delivererRepository = new DelivererFileRepository();
	}
	
	public ArrayList<Object> getAll() {
		ArrayList<Object> users = new ArrayList<Object>();
		
		users.addAll(adminRepository.getAll());
		users.addAll(managerRepository.getAll());
		users.addAll(customerRepository.getAll());
		users.addAll(delivererRepository.getAll());
		
		return users;
	}

	public User getByUsername(String username) {
		ArrayList<Object> users = getAll();
		for (Object user : users) {
			if (((User)user).getUsername().equals(username)) {
				return (User)user;
			}
		}
		return null;
	}
	
	public ArrayList<Object> filterByFirstName(ArrayList<Object> users, String firstName) {
		firstName = firstName.toLowerCase();
		
		for (int i = 0; i < users.size(); i++) {
			if (!((User)users.get(i)).getFirstName().toLowerCase().contains(firstName)) {
				users.remove(i);
				i--;
			}
		}
		
		return users;
	}
	
	public ArrayList<Object> filterByLastName(ArrayList<Object> users, String lastName) {
		lastName = lastName.toLowerCase();
		
		for (int i = 0; i < users.size(); i++) {
			if (!((User)users.get(i)).getLastName().toLowerCase().contains(lastName)) {
				users.remove(i);
				i--;
			}
		}
		
		return users;
	}
	
	public ArrayList<Object> filterByUsername(ArrayList<Object> users, String username) {
		username = username.toLowerCase();
		
		for (int i = 0; i < users.size(); i++) {
			if (!((User)users.get(i)).getUsername().toLowerCase().contains(username)) {
				users.remove(i);
				i--;
			}
		}
		
		return users;
	}
}
