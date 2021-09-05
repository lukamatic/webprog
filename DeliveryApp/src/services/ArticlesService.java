package services;

import java.util.ArrayList;

import model.Article;
import model.ArticleType;
import repository.articlesRepository.ArticlesFileRepository;
import repository.articlesRepository.IArticlesRepository;



public class ArticlesService {
private IArticlesRepository articlesRepository;
	
	public ArticlesService() {
		articlesRepository = new ArticlesFileRepository();
	}
	
	public ArrayList<Article> getByRestaurantIdAndType(int id, ArticleType type) {
		return articlesRepository.getByRestaurantIdAndType(id, type);
	}
	
}
