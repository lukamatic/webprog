package services;

import java.util.ArrayList;

import model.Admin;
import model.Manager;
import model.User;
import repository.adminRepository.AdminFileRepository;
import repository.adminRepository.IAdminRepository;

public class AdminsService {
	private IAdminRepository adminRepository;
	private UsersService usersService;
	
	public AdminsService() {
		adminRepository = new AdminFileRepository();
		usersService = new UsersService();
	}
	
	public ArrayList<Admin> getAll() {
		return adminRepository.getAll();
	}

	public Admin updateProfile(User user) {
		Admin admin = adminRepository.getById(user.getId());
		admin.setFirstName(user.getFirstName());
		admin.setLastName(user.getLastName());
		admin.setGender(user.getGender());
		admin.setPassword(user.getPassword());
		if(!admin.getUsername().equals(user.getUsername())) {
			usersService.validateUsername(user.getUsername());
			admin.setUsername(user.getUsername());
		}
		return adminRepository.update(admin);
	}

}
