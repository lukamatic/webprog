package services;

import java.util.ArrayList;

import model.Admin;
import repository.adminRepository.AdminFileRepository;
import repository.adminRepository.IAdminRepository;

public class AdminsService {
	private IAdminRepository adminRepository;
	
	public AdminsService() {
		adminRepository = new AdminFileRepository();
	}
	
	public ArrayList<Admin> getAll() {
		return adminRepository.getAll();
	}

}
