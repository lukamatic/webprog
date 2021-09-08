/***********************************************************************
 * Module:  IArticlesRepository.java
 * Author:  graho
 * Purpose: Defines the Interface IArticlesRepository
 ***********************************************************************/
package repository.articlesRepository;

import java.util.ArrayList;

import model.Article;
import model.ArticleType;
import repository.IRepository;

/** @pdOid 5554d6e6-a2d5-4418-ab34-13388ba53256 */
public interface IArticlesRepository extends IRepository<Integer, Article> {

	ArrayList<Article> getByRestaurantIdAndType(int id, ArticleType type);
}