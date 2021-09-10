package controllers;

import java.io.InputStream;
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

import org.glassfish.jersey.media.multipart.FormDataContentDisposition;
import org.glassfish.jersey.media.multipart.FormDataParam;

import com.google.gson.Gson;

import exceptions.UnauthorizedException;
import model.Article;
import model.ArticleType;
import model.Manager;
import model.User;
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
	@Path("/create")
	@Consumes({MediaType.MULTIPART_FORM_DATA})
	public Article create(@Context HttpServletRequest request,
						  @FormDataParam("file") InputStream fileInputStream,
	                      @FormDataParam("file") FormDataContentDisposition fileMetaData,
	                      @FormDataParam("articleJSON") String articleJSON) throws Exception
	{
		Manager manager = (Manager)request.getSession().getAttribute("user");
		
		if (manager == null) {
			throw new UnauthorizedException("Only managers can create articles.");
		}
		
		Article article = new Gson().fromJson(articleJSON, Article.class);
		return articlesService.create(fileInputStream, fileMetaData, article, manager.getRestaurantId());
	}

	@PUT
	@Path("/update")
	@Consumes({MediaType.MULTIPART_FORM_DATA})
	public Article update(@Context HttpServletRequest request,
						  @FormDataParam("file") InputStream fileInputStream,
	                      @FormDataParam("file") FormDataContentDisposition fileMetaData,
	                      @FormDataParam("articleJSON") String articleJSON) throws Exception
	{
		Manager manager = (Manager)request.getSession().getAttribute("user");
		
		if (manager == null) {
			throw new UnauthorizedException("Only managers can update articles.");
		}
		
		Article article = new Gson().fromJson(articleJSON, Article.class);
		return articlesService.update(fileInputStream, fileMetaData, article);
	}
	
}
