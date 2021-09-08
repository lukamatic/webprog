package controllers;

import java.util.ArrayList;
import java.util.Date;

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
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import model.Cart;
import model.Order;
import model.Restaurant;
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
	
	
	@GET
	@Path("/search")
	@Produces(MediaType.APPLICATION_JSON)
	public ArrayList<Order> search(@QueryParam("user") int id,
										@QueryParam("restaurantName") String restaurantName,
										@QueryParam("priceFrom") Double lowestPrice, 
										@QueryParam("priceTo") Double highestPrice,
										@QueryParam("dateFrom") long startDate, 
										@QueryParam("dateTo") long endDate) {

		
		ArrayList<Order> orders;
		if (id == 0) {
			orders = ordersService.getAll(); 
		}
		else {
			orders = ordersService.getByUserId(id);
		}
		
		if (restaurantName != null && restaurantName != "") {
			ordersService.filterByRestaurantName(orders, restaurantName);
		}
		
		if(highestPrice != null  || lowestPrice != null) {
			ordersService.filterByPrice(orders, lowestPrice, highestPrice);
		}

		if (startDate != 0 || endDate != 0) {
			if(endDate == 0) {
				 endDate = System.currentTimeMillis(); //current time if no end date entry
			} else {
				endDate = endDate + 86399999L; //correcting time to the end of the day
			}
			ordersService.filterByDate(orders, startDate, endDate);
		}
		
		return orders;
	}

	@POST
	@Path("")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public void create(@Context HttpServletRequest request, Cart cart) {
		ordersService.createOrder(cart);
	}
	
	@PUT
	@Path("/cancel/{orderId}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public void cancel(@Context HttpServletRequest request, @PathParam("orderId") String id) {
		ordersService.cancelOrder(id);
	}
}


