package controllers;

import java.util.ArrayList;

import javax.annotation.PostConstruct;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import model.Address;
import model.Location;
import model.Restaurant;
import model.RestaurantType;
import repository.restaurantRepository.RestaurantFileRepository;
import services.RestaurantService;

@Path("/restaurants")
public class RestaurantsController {

	@Context
	HttpServletRequest request;
	@Context
	ServletContext context;

	private RestaurantService restaurantService;

	@PostConstruct
	public void init() {
		if (context.getAttribute("restaurantService") == null)
			context.setAttribute("restaurantService", new RestaurantService());
		
		restaurantService = (RestaurantService)context.getAttribute("restaurantService");
	}

	@GET
	@Path("/all")
	@Produces(MediaType.APPLICATION_JSON)
	public ArrayList<Restaurant> getAll() {
		RestaurantFileRepository rfr = new RestaurantFileRepository();
		
		rfr.delete(0);
		rfr.delete(1);
		rfr.delete(2);
		rfr.delete(3);
		
		Restaurant r1 = new Restaurant(0, "Leskovački merak", RestaurantType.GRILL, new ArrayList<Integer>(), true,
				"", new Location(44.0128, 20.9114, new Address("Bulevar Kralja Petra", "34A", "Kragujevac", "Serbia", "550601")));
		Restaurant r2 = new Restaurant(1, "Pizza Bella", RestaurantType.ITALIAN, new ArrayList<Integer>(), false,
				"", new Location(44.8125, 20.4612, new Address("Svetog Save", "117", "Beograd", "Serbia", "550601")));
		Restaurant r3 = new Restaurant(2, "Dva štapića", RestaurantType.CHINESE, new ArrayList<Integer>(), false,
				"", new Location(45.2889	, 19.7245, new Address("Vuka Karadžića", "77", "Novi Sad", "Serbia", "550601")));
		Restaurant r4 = new Restaurant(3, "Zelenko", RestaurantType.VEGAN, new ArrayList<Integer>(), true,
				"", new Location(45.7733, 19.1151, new Address("Save Šumanovića", "34A", "Sombor", "Serbia", "550601")));
		
		ArrayList<Restaurant> rs = new ArrayList<Restaurant>();
		rs.add(r1);
		rs.add(r2);
		rs.add(r3);
		rs.add(r4);
		
		rfr.writeToFile(rs);
		
		return restaurantService.getAll();
	}
}
