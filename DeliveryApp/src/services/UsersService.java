package services;

import java.util.ArrayList;

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
}
