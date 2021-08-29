package services;

import java.util.ArrayList;

import model.Manager;
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
}
