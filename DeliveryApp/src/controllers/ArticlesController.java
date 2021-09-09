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

import model.Article;
import model.ArticleType;
import services.ArticlesService;


@Path("/articles")
public class ArticlesController {
	
	@Context
	HttpServletRequest request;
	@Context
	ServletContext context;

	private ArticlesService articlesService;
	
	@PostConstruct
	public void init() {
		if (context.getAttribute("articlesService") == null)
			context.setAttribute("articlesService", new ArticlesService());
		
		articlesService = (ArticlesService)context.getAttribute("articlesService");
	}
	
	@GET
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Article getById(@PathParam("id") int id) {
		return articlesService.getById(id);
	}
	
	@GET
	@Path("/{id}/{typeStr}")
	@Produces(MediaType.APPLICATION_JSON)
	public ArrayList<Article> getAllByRestaurantIdAndType(@PathParam("id") int id, @PathParam("typeStr") String typeStr) {
		ArticleType type = ArticleType.FOOD;
		if(typeStr.toLowerCase().equals("food")) {
			type = ArticleType.FOOD;
		}
		else if (typeStr.toLowerCase().equals("beverages")) {
			type = ArticleType.DRINK;
			
		}
		
		return articlesService.getByRestaurantIdAndType(id, type);
	}


	@POST
	@Path("")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Article create(@Context HttpServletRequest request) {
		
		return null;
	}
	
}
