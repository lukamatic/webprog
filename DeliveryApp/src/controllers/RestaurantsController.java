package controllers;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.ArrayList;

import javax.annotation.PostConstruct;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.glassfish.jersey.media.multipart.FormDataContentDisposition;
import org.glassfish.jersey.media.multipart.FormDataParam;

import com.google.gson.Gson;

import exceptions.BadRequestException;
import model.Address;
import model.Address;
import model.Article;
import model.ArticleSize;
import model.ArticleType;
import model.Location;
import model.Restaurant;
import model.RestaurantType;
import model.Unit;
import services.RestaurantsService;

@Path("/restaurants")
public class RestaurantsController {

	@Context
	HttpServletRequest request;
	@Context
	ServletContext context;

	private RestaurantsService restaurantsService;

	@PostConstruct
	public void init() {
		if (context.getAttribute("restaurantService") == null)
			context.setAttribute("restaurantService", new RestaurantsService());
		
		restaurantsService = (RestaurantsService)context.getAttribute("restaurantService");
	}

	@GET
	@Path("/")
	@Produces(MediaType.APPLICATION_JSON)
	public ArrayList<Restaurant> getAll() {
		/*
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
		*/
		
		return restaurantsService.getAll();
	}
	
	@GET
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Restaurant getById(@PathParam("id") int id) {
		return restaurantsService.getById(id);
	}
	
	@DELETE
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public void delete(@PathParam("id") int id) {
		 restaurantsService.delete(id);
	}

	@GET
	@Path("/search")
	@Produces(MediaType.APPLICATION_JSON)
	public ArrayList<Restaurant> search(@QueryParam("name") String name,
										@QueryParam("type") String type, 
										@QueryParam("location") String location,
										@QueryParam("from") Double from, 
										@QueryParam("to") Double to) {
		ArrayList<Restaurant> restaurants = restaurantsService.getAll();
		
		if (name != null && name != "") {
			restaurantsService.filterByName(restaurants, name);
		}
		
		if (type != null && type != "") {
			restaurantsService.filterByType(restaurants, type);
		}
		
		if (location != null && location != "") {
			restaurantsService.filterByLocation(restaurants, location);
		}
		
		if (from != null || to != null) {
			if (from == null) {
				from = 0.0;
			}
			
			if (to == null) {
				to = 5.0;
			}
			
			restaurantsService.filterByAverageRating(restaurants, from, to);
		}
		
		return restaurants;
	}
	
	@POST
	@Path("/create")
	@Consumes({MediaType.MULTIPART_FORM_DATA})
	public Restaurant create(@FormDataParam("file") InputStream fileInputStream,
	                              @FormDataParam("file") FormDataContentDisposition fileMetaData,
	                              @FormDataParam("restaurantJSON") String restaurantJSON,
	                              @FormDataParam("managerId") int managerId) throws Exception
	{
		Restaurant restaurant = new Gson().fromJson(restaurantJSON, Restaurant.class);
		return restaurantsService.create(fileInputStream, fileMetaData, restaurant, managerId);
	}
}
