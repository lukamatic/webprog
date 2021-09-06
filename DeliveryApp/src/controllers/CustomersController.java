package controllers;

import javax.annotation.PostConstruct;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import model.Customer;
import model.Manager;
import model.User;
import services.CustomersService;
import services.ManagersService;

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
	public Customer update(@Context HttpServletRequest request, User customer) {
		//Customer customer = new Customer(user);
		return customerService.update(customer);
	}
}