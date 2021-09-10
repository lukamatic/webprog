package controllers;

import java.util.ArrayList;

import javax.annotation.PostConstruct;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import model.Cart;
import model.CartItem;
import model.Customer;
import model.User;
import services.CustomersService;

@Path("/customers")
public class CustomersController {
	@Context
	HttpServletRequest request;
	@Context
	ServletContext context;

	private CustomersService customersService;

	@PostConstruct
	public void init() {
		if (context.getAttribute("customerService") == null)
			context.setAttribute("customerService", new CustomersService());
		
		customersService = (CustomersService)context.getAttribute("customerService");
	}
	
	@GET
	@Path("restaurantCustomers/{restaurantId}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public ArrayList<Customer> getRestaurantCustomers(@PathParam("restaurantId") int restaurantId) {
		return customersService.getRestaurantCustomers(restaurantId);
	}
	
	@POST
	@Path("/create")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Customer create(@Context HttpServletRequest request, User user) {
		Customer customer = new Customer(user);
		return customersService.create(customer);
	}
	
	@PUT
	@Path("")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Customer updateProfile(@Context HttpServletRequest request, User customer) {
		//Customer customer = new Customer(user);
		return customersService.updateProfile(customer);
	}
	
	@PUT
	@Path("/cart")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Customer updateCart(@Context HttpServletRequest request, Cart cart) {
		return customersService.updateCart(cart);
	}
	
	@PUT
	@Path("/item/{customerId}")
	@Consumes(MediaType.APPLICATION_JSON)
	public void addItemToCart(@Context HttpServletRequest request, @PathParam("customerId") int id, CartItem item) {
		customersService.addToCart(item,id);
	}
}
