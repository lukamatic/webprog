/***********************************************************************
 * Module:  ArticlesFileRepository.java
 * Author:  Luka
 * Purpose: Defines the Class ArticlesFileRepository
 ***********************************************************************/
package repository.articlesRepository;

import java.util.ArrayList;

import model.Article;
import repository.IFileRepository;

/** @pdOid b6505f2d-566d-4767-8e11-85717ab78054 */
public class ArticlesFileRepository implements IArticlesRepository, IFileRepository<Article> {
	/** @pdOid 0ab78e29-4168-4320-8daa-bb124f1fc1c0 */
	private String path;

	@Override
	public Article getById(Integer key) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public ArrayList<Article> getAll() {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public Boolean save(Article value) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public Boolean update(Article value) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public Boolean delete(Integer key) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public boolean writeToFile(ArrayList<Article> values) {
		// TODO Auto-generated method stub
		return false;
	}
	
	@Override
	public ArrayList<Article> readFromFile() {
		// TODO Auto-generated method stub
		return null;
	}

}