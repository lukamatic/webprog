package services;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.ArrayList;

import javax.ws.rs.WebApplicationException;

import org.glassfish.jersey.media.multipart.FormDataContentDisposition;

import exceptions.BadRequestException;
import model.Article;
import model.ArticleType;
import model.Restaurant;
import repository.articlesRepository.ArticlesFileRepository;
import repository.articlesRepository.IArticlesRepository;

public class ArticlesService {
	private IArticlesRepository articlesRepository;
	private RestaurantsService restaurantsService;
	
	public ArticlesService() {
		articlesRepository = new ArticlesFileRepository();
		restaurantsService = new RestaurantsService();
	}
	
	public ArrayList<Article> getAll() {
		return articlesRepository.getAll();
	}
	
	public Article getById(int id) {
		return articlesRepository.getById(id);
	}
	
	public ArrayList<Article> getByRestaurantIdAndType(int id, ArticleType type) {
		return articlesRepository.getByRestaurantIdAndType(id, type);
	}
	
	public Article create(InputStream fileInputStream, FormDataContentDisposition fileMetaData, Article article, int restaurantId) {
		article.setId(calculateId());
		article.setRestaurantId(restaurantId);
		
		if (fileMetaData.getFileName() != null) {
			validateImage(fileMetaData);
			String imageName = saveImage(fileInputStream, article.getId(), getFileExtension(fileMetaData));
			article.setImageName(imageName);
		}
		
		articlesRepository.save(article);
		restaurantsService.addArticleToRestaurant(article.getId(), restaurantId);
		
		return article;
	}
	
	public Article update(InputStream fileInputStream, FormDataContentDisposition fileMetaData, Article article, int restaurantId) {
		article.setRestaurantId(restaurantId);
		
		if (fileMetaData.getFileName() != null) {
			validateImage(fileMetaData);
			String imageName = saveImage(fileInputStream, article.getId(), getFileExtension(fileMetaData));
			article.setImageName(imageName);
		}
		
		articlesRepository.update(article);
		restaurantsService.addArticleToRestaurant(article.getId(), restaurantId);
		
		return article;
	}
	
	private void validateImage(FormDataContentDisposition fileMetaData) {
		String extension = getFileExtension(fileMetaData);
	    
	    if (!extension.equals("png") && !extension.equals("jpg") && !extension.equals("jpeg")) {
	    	throw new BadRequestException("Invalid image type. Only png, jpg and jpeg allowed.");
	    }
	}
	
	private String getFileExtension(FormDataContentDisposition fileMetaData) {
	    String[] parts = fileMetaData.getFileName().split("\\.");
	    return parts[parts.length - 1];
	}
	
	private String saveImage(InputStream fileInputStream, int articleId, String fileExtension) {
	    try
	    {
	    	String fileName = "a" + articleId + "." + fileExtension;
		    String filePath = "WebContent/Images/";
	        int read = 0;
	        byte[] bytes = new byte[1024];
	 
	        OutputStream out = new FileOutputStream(new File(filePath + fileName));
	        while ((read = fileInputStream.read(bytes)) != -1) 
	        {
	            out.write(bytes, 0, read);
	        }
	        out.flush();
	        out.close();
	        
	        return fileName;
	    } catch (IOException e) 
	    {
	        throw new WebApplicationException("Error while uploading file. Please try again.");
	    }
	}
	
	private int calculateId() {
		ArrayList<Article> articles = getAll();
		
		if (articles.size() == 0) {
			return 0;
		}
		
		return getMaxId(articles) + 1;
	}
	
	private int getMaxId(ArrayList<Article> articles) {
		int maxId = (articles.get(0)).getId();
		
		for (Article article : articles) {
			int id = article.getId();
			
			if (id > maxId) {
				maxId = id;
			}
		}
		
		return maxId;
	}
}
