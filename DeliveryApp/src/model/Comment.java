/***********************************************************************
 * Module:  Comment.java
 * Author:  Luka
 * Purpose: Defines the Class Comment
 ***********************************************************************/
package model;

public class Comment {
	private int id;
    private int customerId;
    private int restaurantId;
    private String text;
	private double rating;
	private CommentStatus status;
	private boolean isDeleted;
	
	public Comment(int id, int customerId, int restaurantId, String text, double rating, CommentStatus status, boolean isDeleted) {
		super();
		this.id = id; 
		this.customerId = customerId;
		this.restaurantId = restaurantId;
		this.text = text;
		this.rating = rating;
		this.status = status;
		this.isDeleted = isDeleted;
	}
	public Comment() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getCustomerId() {
		return customerId;
	}

	public void setCustomerId(int customerId) {
		this.customerId = customerId;
	}

	public int getRestaurantId() {
		return restaurantId;
	}

	public void setRestaurantId(int restaurantId) {
		this.restaurantId = restaurantId;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public double getRating() {
		return rating;
	}

	public void setRating(double rating) {
		this.rating = rating;
	}

	public CommentStatus getStatus() {
		return status;
	}

	public void setStatus(CommentStatus status) {
		this.status = status;
	}
	
	public boolean isDeleted() {
		return isDeleted;
	}
	
	public void setDeleted(boolean isDeleted) {
		this.isDeleted = isDeleted;
	}
	
	
	
	
}