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

import model.Manager;
import model.User;
import services.ManagersService;

@Path("/managers")
public class ManagersController {

	@Context
	HttpServletRequest request;
	@Context
	ServletContext context;

	private ManagersService managersService;

	@PostConstruct
	public void init() {
		if (context.getAttribute("managersService") == null)
			context.setAttribute("managersService", new ManagersService());
		
		managersService = (ManagersService)context.getAttribute("managersService");
	}

	@POST
	@Path("/create")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Manager create(@Context HttpServletRequest request, User user) {
		Manager manager = new Manager(user);
		return managersService.create(manager);
	}
	
	@GET
	@Path("/available")
	@Produces(MediaType.APPLICATION_JSON)
	public ArrayList<Manager> getAvailableManagers() {
		return managersService.getAvailableManagers();
	}
}
