/***********************************************************************
 * Module:  ArticlesFileRepository.java
 * Author:  Luka
 * Purpose: Defines the Class ArticlesFileRepository
 ***********************************************************************/
package repository.articlesRepository;

import java.io.FileWriter;
import java.io.IOException;
import java.lang.reflect.Type;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

import model.Article;
import model.ArticleSize;
import model.ArticleType;
import model.Customer;
import model.Manager;
import model.Unit;
import repository.IFileRepository;

/** @pdOid b6505f2d-566d-4767-8e11-85717ab78054 */
public class ArticlesFileRepository implements IArticlesRepository, IFileRepository<Article> {
	/** @pdOid 0ab78e29-4168-4320-8daa-bb124f1fc1c0 */
	private String path = "FileStorage/articles.json";
	
	@Override
	public Article getById(Integer key) {
		ArrayList<Article> articles = readFromFile();
		
		for (Article article : articles) {
			if (article.getId() == key) {
				return article;
			}
		}
		
		return null;
	}
	
	@Override
	public ArrayList<Article> getAll() {
		ArrayList<Article> articles = readFromFile();
		
		for (int i = 0; i < articles.size(); i++) {
			if (articles.get(i).isDeleted()) {
				articles.remove(i);
				i--;
			}
		}
		
		return articles;
	}
	
	@Override
	public Article save(Article value) {
		ArrayList<Article> articles = readFromFile();
		articles.add(value);
		writeToFile(articles);
		return value;
	}
	
	@Override
	public Article update(Article value) {
		ArrayList<Article> articles = readFromFile();

		for (int i = 0; i < articles.size(); i++) {
			if (articles.get(i).getId() == value.getId()) {
				articles.set(i, value);
			}
		}
		
		writeToFile(articles);
		return value;
	}
	
	@Override
	public Boolean delete(Integer key) {
		ArrayList<Article> articles = readFromFile();

		for (int i = 0; i < articles.size(); i++) {
			if (articles.get(i).getId() == key) {
				articles.get(i).setDeleted(true);;
			}
		}
		
		writeToFile(articles);
		return null;
	}
	
	@Override
	public boolean writeToFile(ArrayList<Article> values) {
		Gson gson = new Gson();
        String json = gson.toJson(values);
        FileWriter fileWriter = null;

        try {
            fileWriter = new FileWriter(path, StandardCharsets.UTF_8);
            fileWriter.write(json);
            fileWriter.flush();
            fileWriter.close();
            return true;
        } catch (Exception e) {
            e.printStackTrace();
        }
        
        return false;
	}
	
	@Override
	public ArrayList<Article> readFromFile() {
		Gson gson = new Gson();

        try {
            String json = new String(Files.readAllBytes(Paths.get(path)));

            Type listType = new TypeToken<ArrayList<Article>>(){}.getType();
            return gson.fromJson(json, listType);
        } catch (IOException e) {
            e.printStackTrace();
        }
        
        return null;
	}
	
	public ArrayList<Article> getByRestaurantIdAndType(int restaurantId, ArticleType type) {
		
		ArrayList<Article> allArticles = this.readFromFile();
		/*
		Article a1 = new Article(0, "Pastrmka", 570.0 , ArticleType.FOOD, 0, "Pecena pastrmka posluzena sa krompir salatom i tzatziki sosom.", "", false, new ArticleSize(400, Unit.GRAMS));
		Article a2 = new Article(1, "Pizza capricciosa", 320.0 , ArticleType.FOOD, 1, "Pelat, origano, sunka, kackavalj, sampinjoni, masline", "", false, null);
		Article a3 = new Article(2, "Belo meso u prezli", 400.0 , ArticleType.FOOD, 0, "Belo meso pohovano u prezli sa pomfritom", "", false, new ArticleSize(500, Unit.GRAMS));
		Article a4 = new Article(3, "Limunada", 170.0 , ArticleType.DRINK, 0, "Domace cedjena limunada", "", false, new ArticleSize(300, Unit.MILILITERS));
		Article a5 = new Article(4, "Staropramen", 290.0 , ArticleType.DRINK, 0, "", "", false, new ArticleSize(500, Unit.MILILITERS));
		Article a6 = new Article(5, "Karadjordjeva snicla", 630.0 , ArticleType.FOOD, 0, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "", false, null);
		Article a7 = new Article(6, "Riba", 570.0 , ArticleType.FOOD, 0, "Pecena riba posluzena sa krompir salatom i tzatziki sosom.", "", true, new ArticleSize(400, Unit.GRAMS));
		Article a8 = new Article(7, "Spaghetti bolognese", 570.0 , ArticleType.FOOD, 0, "Al dente kuvana testenina spaghetti sa bolognese sosom", "", false, new ArticleSize(400, Unit.GRAMS));
		Article a9 = new Article(8, "Pizza margarita", 240.0 , ArticleType.FOOD, 1, "Pelat, origano, kackavalj", "", false, new ArticleSize(400, Unit.GRAMS));

		allArticles.add(a1);
		allArticles.add(a2);
		allArticles.add(a3);
		allArticles.add(a4);
		allArticles.add(a5);
		allArticles.add(a6);
		allArticles.add(a7);
		allArticles.add(a8);
		allArticles.add(a9);
		this.writeToFile(allArticles);*/
;
		ArrayList<Article> articles = new ArrayList<Article>();
		for (Article a : allArticles) {
			if (a.getRestaurantId() == restaurantId && a.getArticleType() == type && a.isDeleted() == false)
				articles.add(a); 
		}
		return articles;
	}


}