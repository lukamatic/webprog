package controllers;

import java.util.ArrayList;

import javax.annotation.PostConstruct;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import model.Order;
import services.OrdersService;


@Path("/orders")
public class OrdersController {
	@Context
	HttpServletRequest request;
	@Context
	ServletContext context;

	private OrdersService ordersService;
	
	@PostConstruct
	public void init() {
		if (context.getAttribute("ordersService") == null)
			context.setAttribute("ordersService", new OrdersService());
		
		ordersService = (OrdersService)context.getAttribute("ordersService");
	}
	
	@GET
	@Path("/user/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public ArrayList<Order> getByUserId(@PathParam("id") int id) {
		return ordersService.getByUserId(id);
	}

	@GET
	@Path("/restaurant/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public ArrayList<Order> getByRestaurantId(@PathParam("id") int id) {
		return ordersService.getByRestaurantId(id);
	}

	@POST
	@Path("")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Order create(@Context HttpServletRequest request) {
		
		return null;
	}
}
