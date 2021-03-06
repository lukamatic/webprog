package controllers;

import java.util.ArrayList;
import java.util.Date;

import javax.annotation.PostConstruct;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import model.Admin;
import model.Cart;
import model.Customer;
import model.CustomerType;
import model.CustomerTypeName;
import model.Deliverer;
import model.Gender;
import model.Manager;
import model.Restaurant;
import model.Role;
import model.User;
import repository.userRepository.UserFileRepository;
import services.UsersService;

@Path("/users")
public class UsersController {

	@Context
	HttpServletRequest request;
	@Context
	ServletContext context;

	private UsersService usersService;

	@PostConstruct
	public void init() {
		if (context.getAttribute("usersService") == null)
			context.setAttribute("usersService", new UsersService());
		
		usersService = (UsersService)context.getAttribute("usersService");
	}

	@GET
	@Path("/")
	@Produces(MediaType.APPLICATION_JSON)
	public ArrayList<Object> getAll() {
		return usersService.getAll();
	}
	
	@GET
	@Path("/search")
	@Produces(MediaType.APPLICATION_JSON)
	public ArrayList<Object> search(@QueryParam("firstName") String firstName,
									@QueryParam("lastName") String lastName, 
									@QueryParam("username") String username) {
		ArrayList<Object> users = usersService.getAll();
		
		if (firstName != null && firstName != "") {
			usersService.filterByFirstName(users, firstName);
		}
		
		if (lastName != null && lastName != "") {
			usersService.filterByLastName(users, lastName);
		}
		
		if (username != null && username != "") {
			usersService.filterByUsername(users, username);
		}
		
		return users;
	}

	@PUT
	@Path("{id}/block")
	@Produces(MediaType.APPLICATION_JSON)
	public User block(@PathParam("id") int id) {
		return usersService.block(id);
	}

	@PUT
	@Path("{id}/unblock")
	@Produces(MediaType.APPLICATION_JSON)
	public User unblock(@PathParam("id") int id) {
		return usersService.unblock(id);
	}
	
	@GET
	@Path("/{id}/")
	@Produces(MediaType.APPLICATION_JSON)
	public User getByUsername(@PathParam("id") String id) {
		User u = usersService.getByUsername(id);

		System.out.println("**********"+id+"***********");
		return u;
	}
	
	@DELETE
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public void delete(@PathParam("id") int id) {
		usersService.delete(id);
	}
}
