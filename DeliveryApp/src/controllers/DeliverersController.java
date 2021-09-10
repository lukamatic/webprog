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

import model.Deliverer;
import model.Order;
import model.User;
import services.DeliverersService;

@Path("/deliverers")
public class DeliverersController {

	@Context
	HttpServletRequest request;
	@Context
	ServletContext context;

	private DeliverersService deliverersService;

	@PostConstruct
	public void init() {
		if (context.getAttribute("deliverersService") == null)
			context.setAttribute("deliverersService", new DeliverersService());
		
		deliverersService = (DeliverersService)context.getAttribute("deliverersService");
	}
	
	@GET
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Deliverer getById(@PathParam("id") int id) {
		Deliverer d = deliverersService.getById(id);
		System.out.println(d.getUsername());
		return d;
	}

	@POST
	@Path("/create")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Deliverer create(@Context HttpServletRequest request, User user) {
		Deliverer deliverer = new Deliverer(user);
		return deliverersService.create(deliverer);
	}
	
	@PUT
	@Path("")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Deliverer updateProfile(@Context HttpServletRequest request, Deliverer deliverer) {
		return deliverersService.updateProfile(deliverer);
	}
}
