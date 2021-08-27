package services;

import java.util.ArrayList;

import model.Manager;
import repository.managerRepository.ManagerFileRepository;
import repository.managerRepository.IManagerRepository;

public class ManagersService {
	private IManagerRepository managerRepository;
	
	public ManagersService() {
		managerRepository = new ManagerFileRepository();
	}
	
	public ArrayList<Manager> getAll() {
		return managerRepository.getAll();
	}

}
