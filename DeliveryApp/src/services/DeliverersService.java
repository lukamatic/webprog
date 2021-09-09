package services;

import java.util.ArrayList;

import model.Deliverer;
import model.Manager;
import model.User;
import repository.delivererRepository.DelivererFileRepository;
import repository.delivererRepository.IDelivererRepository;

public class DeliverersService {
	private IDelivererRepository delivererRepository;
	private UsersService usersService;
	
	public DeliverersService() {
		delivererRepository = new DelivererFileRepository();
		usersService = new UsersService();
	}
	
	public ArrayList<Deliverer> getAll() {
		return delivererRepository.getAll();
	}

	public Deliverer create(Deliverer deliverer) {
		usersService.validateUsername(deliverer.getUsername());
		deliverer.setId(usersService.calculateId());
		return delivererRepository.save(deliverer);
	}

	public Deliverer updateProfile(User user) {
		Deliverer deliverer = delivererRepository.getById(user.getId());
		deliverer.setFirstName(user.getFirstName());
		deliverer.setLastName(user.getLastName());
		deliverer.setGender(user.getGender());
		deliverer.setPassword(user.getPassword());
		if(!deliverer.getUsername().equals(user.getUsername())) {
			usersService.validateUsername(user.getUsername());
			deliverer.setUsername(user.getUsername());
		}
		return delivererRepository.update(deliverer);
	}
}
