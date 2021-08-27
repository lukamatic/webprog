package services;

import java.util.ArrayList;

import model.Deliverer;
import repository.delivererRepository.DelivererFileRepository;
import repository.delivererRepository.IDelivererRepository;

public class DeliverersService {
	private IDelivererRepository delivererRepository;
	
	public DeliverersService() {
		delivererRepository = new DelivererFileRepository();
	}
	
	public ArrayList<Deliverer> getAll() {
		return delivererRepository.getAll();
	}

}
