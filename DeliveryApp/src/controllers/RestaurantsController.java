package controllers;

import java.util.ArrayList;

import javax.annotation.PostConstruct;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import model.Restaurant;
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
		return restaurantService.getAll();
	}
}
