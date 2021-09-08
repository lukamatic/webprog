package controllers;

import javax.annotation.PostConstruct;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.Consumes;
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

	private CustomersService customerService;

	@PostConstruct
	public void init() {
		if (context.getAttribute("customerService") == null)
			context.setAttribute("customerService", new CustomersService());
		
		customerService = (CustomersService)context.getAttribute("customerService");
	}
	/*
	@POST
	@Path("/create")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Customer create(@Context HttpServletRequest request, User user) {
		Customer customer = new Customer(user);
		return customerService.create(customer);
	}
	*/
	@PUT
	@Path("")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Customer updateProfile(@Context HttpServletRequest request, User customer) {
		//Customer customer = new Customer(user);
		return customerService.updateProfile(customer);
	}
	
	@PUT
	@Path("/cart")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Customer updateCart(@Context HttpServletRequest request, Cart cart) {
		return customerService.updateCart(cart);
	}
	
	@PUT
	@Path("/item/{customerId}")
	@Consumes(MediaType.APPLICATION_JSON)
	public void addItemToCart(@Context HttpServletRequest request, @PathParam("customerId") int id, CartItem item) {
		customerService.addToCart(item,id);
	}
}
