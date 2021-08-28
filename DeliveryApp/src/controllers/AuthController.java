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

import model.User;
import services.AuthService;

@Path("/auth")
public class AuthController {

	@Context
	HttpServletRequest request;
	@Context
	ServletContext context;

	private AuthService authService;

	@PostConstruct
	public void init() {
		if (context.getAttribute("authService") == null)
			context.setAttribute("authService", new AuthService());
		
		authService = (AuthService)context.getAttribute("authService");
	}

	@POST
	@Path("/login")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public User login(@Context HttpServletRequest request, User user) {
		User retVal = null;
		retVal = (User) request.getSession().getAttribute("user");
		if (retVal == null) {
			retVal = authService.validateUser(user.getUsername(), user.getPassword());
			if (retVal == null) {
				return null;
			}
			request.getSession().setAttribute("user", user);
		}
		return retVal;
	}

	@POST
	@Path("/logout")
	@Produces(MediaType.APPLICATION_JSON)
	public void logout(@Context HttpServletRequest request) {
		request.getSession().invalidate();
	}
}
