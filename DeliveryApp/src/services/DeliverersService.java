package services;

import java.util.ArrayList;

import model.Deliverer;
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
}
