/***********************************************************************
 * Module:  Article.java
 * Author:  Luka
 * Purpose: Defines the Class Article
 ***********************************************************************/
package model;

public class Article {
   private int id;
   private String name;
   private double price;
   private ArticleType articleType;
   private int restaurantId;
   private String description;
   private String imageName;
   private boolean isDeleted;
   
   private ArticleSize articleSize;

	public Article(int id, String name, double price, ArticleType articleType, int restaurantId, String description,
			String imageName, boolean isDeleted, ArticleSize articleSize) {
		super();
		this.id = id;
		this.name = name;
		this.price = price;
		this.articleType = articleType;
		this.restaurantId = restaurantId;
		this.description = description;
		this.imageName = imageName;
		this.isDeleted = isDeleted;
		this.articleSize = articleSize;
	}
	
	

	public Article() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public ArticleType getArticleType() {
		return articleType;
	}

	public void setArticleType(ArticleType articleType) {
		this.articleType = articleType;
	}

	public int getRestaurantId() {
		return restaurantId;
	}

	public void setRestaurantId(int restaurantId) {
		this.restaurantId = restaurantId;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getImageName() {
		return imageName;
	}

	public void setImageName(String imageName) {
		this.imageName = imageName;
	}

	public boolean isDeleted() {
		return isDeleted;
	}

	public void setDeleted(boolean isDeleted) {
		this.isDeleted = isDeleted;
	}

	public ArticleSize getArticleSize() {
		return articleSize;
	}

	public void setArticleSize(ArticleSize articleSize) {
		this.articleSize = articleSize;
	}

	
	
	
}