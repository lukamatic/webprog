package services;

import java.util.ArrayList;

import model.Customer;
import model.Manager;
import model.User;
import repository.managerRepository.ManagerFileRepository;
import repository.managerRepository.IManagerRepository;

public class ManagersService {
	private IManagerRepository managerRepository;
	private UsersService usersService;
	
	public ManagersService() {
		managerRepository = new ManagerFileRepository();
		usersService = new UsersService();
	}
	
	public ArrayList<Manager> getAll() {
		return managerRepository.getAll();
	}

	public Manager create(Manager manager) {
		usersService.validateUsername(manager.getUsername());
		manager.setId(usersService.calculateId());
		return managerRepository.save(manager);
	}
	
	public ArrayList<Manager> getAvailableManagers() {
		ArrayList<Manager> managers = managerRepository.getAll();
		
		for (int i = 0; i < managers.size(); i++) {
			if (managers.get(i).getRestaurantId() != -1) {
				managers.remove(i);
				i--;
			}
		}
		
		return managers;
	} 
	
	public void assignRestaurantToManager(int restaurantId, int managerId) {
		Manager manager = managerRepository.getById(managerId);
		manager.setRestaurantId(restaurantId);
		managerRepository.update(manager);
	}

	public Manager update(Manager manager) {
		usersService.validateUsername(manager.getUsername());
		return managerRepository.update(manager);
	}

	public Manager updateProfile(User user) {
		Manager manager = managerRepository.getById(user.getId());
		manager.setFirstName(user.getFirstName());
		manager.setLastName(user.getLastName());
		manager.setGender(user.getGender());
		manager.setPassword(user.getPassword());
		if(!manager.getUsername().equals(user.getUsername())) {
			usersService.validateUsername(user.getUsername());
			manager.setUsername(user.getUsername());
		}
		return managerRepository.update(manager);
	}

}
