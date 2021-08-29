package controllers;

import javax.annotation.PostConstruct;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import model.Deliverer;
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

	@POST
	@Path("/create")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Deliverer create(@Context HttpServletRequest request, User user) {
		Deliverer deliverer = new Deliverer(user);
		return deliverersService.create(deliverer);
	}
}
