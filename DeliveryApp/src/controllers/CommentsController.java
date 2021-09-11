package controllers;

import java.util.ArrayList;

import javax.annotation.PostConstruct;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import model.Comment;
import services.CommentsService;


@Path("/comments")
public class CommentsController {
	
	@Context
	HttpServletRequest request;
	@Context
	ServletContext context;

	private CommentsService commentsService;
	
	@PostConstruct
	public void init() {
		if (context.getAttribute("commentService") == null)
			context.setAttribute("commentService", new CommentsService());
		
		commentsService = (CommentsService)context.getAttribute("commentService");
	}
	
	@GET
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public ArrayList<Comment> getAllByRestaurantId(@PathParam("id") int id) {
		return commentsService.getAllByRestaurantId(id);
	}
	
	@DELETE
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public void delete(@PathParam("id") int id) {
		System.out.println(id);
		 commentsService.delete(id);
	}

	@GET
	@Path("/{id}/approved")
	@Produces(MediaType.APPLICATION_JSON)
	public ArrayList<Comment> getApprovedByRestaurantId(@PathParam("id") int id) {
		return commentsService.getApprovedByRestaurantId(id);
	}

	@POST
	@Path("/create")
	@Consumes(MediaType.APPLICATION_JSON)
	public void create(@Context HttpServletRequest request, Comment comment) {
		commentsService.create(comment);
	}
	
	@PUT
	@Path("/approve/{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	public void approve(@PathParam("id") int id) {
		commentsService.approveComment(id);
	}
	
	@PUT
	@Path("/decline/{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	public void decline(@PathParam("id") int id) {
		commentsService.declineComment(id);
	}
}
