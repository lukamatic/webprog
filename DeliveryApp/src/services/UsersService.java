package services;

import java.util.ArrayList;

import exceptions.BadRequestException;
import model.Customer;
import model.Deliverer;
import model.Manager;
import model.User;
import repository.adminRepository.AdminFileRepository;
import repository.adminRepository.IAdminRepository;
import repository.customerRepository.CustomerFileRepository;
import repository.customerRepository.ICustomerRepository;
import repository.delivererRepository.DelivererFileRepository;
import repository.delivererRepository.IDelivererRepository;
import repository.managerRepository.IManagerRepository;
import repository.managerRepository.ManagerFileRepository;

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

	public User getById(int id) {
		ArrayList<Object> users = getAll();
		
		for (Object user : users) {
			if (((User)user).getId() == id) {
				return (User)user;
			}
		}
		
		return null;
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
	
	public void validateUsername(String username) {
		if (getByUsername(username) != null) {
			throw new BadRequestException("Username already taken.");
		}
	}
	
	public int calculateId() {
		ArrayList<Object> users = getAll();
		
		if (users.size() == 0) {
			return 0;
		}
		
		return getMaxId(users) + 1;
	}
	
	private int getMaxId(ArrayList<Object> users) {
		int maxId = ((User)users.get(0)).getId();
		
		for (Object user : users) {
			int id = ((User)user).getId();
			
			if (id > maxId) {
				maxId = id;
			}
		}
		
		return maxId;
	}
	
	public User block(int id) {
		User user = getById(id);
		
		switch (user.getRole()) {
		case MANAGER:
			Manager manager = managerRepository.getById(id);
			manager.setBlocked(true);
			return (User)managerRepository.update(manager);
		case DELIVERER:
			Deliverer deliverer = delivererRepository.getById(id);
			deliverer.setBlocked(true);
			return (User)delivererRepository.update(deliverer);
		case CUSTOMER:
			Customer customer = customerRepository.getById(id);
			customer.setBlocked(true);
			return (User)customerRepository.update(customer);
		default:
			return null;
		}
	}
	
	public User unblock(int id) {
		User user = getById(id);
		
		switch (user.getRole()) {
		case MANAGER:
			Manager manager = managerRepository.getById(id);
			manager.setBlocked(false);
			return (User)managerRepository.update(manager);
		case DELIVERER:
			Deliverer deliverer = delivererRepository.getById(id);
			deliverer.setBlocked(false);
			return (User)delivererRepository.update(deliverer);
		case CUSTOMER:
			Customer customer = customerRepository.getById(id);
			customer.setBlocked(false);
			return (User)customerRepository.update(customer);
		default:
			return null;
		}
	}
}
