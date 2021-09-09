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

import model.Admin;
import model.User;
import services.AdminsService;
@Path("/admins")
public class AdminsController {
	@Context
	HttpServletRequest request;
	@Context
	ServletContext context;

	private AdminsService adminsService;

	@PostConstruct
	public void init() {
		if (context.getAttribute("adminsService") == null)
			context.setAttribute("adminsService", new AdminsService());
		
		adminsService = (AdminsService)context.getAttribute("adminsService");
	}
	
	@PUT
	@Path("")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Admin updateProfile(@Context HttpServletRequest request, Admin admin) {
		return adminsService.updateProfile(admin);
	}
}
