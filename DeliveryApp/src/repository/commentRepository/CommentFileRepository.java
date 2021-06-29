/***********************************************************************
 * Module:  CommentFileRepository.java
 * Author:  Luka
 * Purpose: Defines the Class CommentFileRepository
 ***********************************************************************/
package repository.commentRepository;

import java.util.ArrayList;

import model.Comment;
import repository.IFileRepository;

/** @pdOid b5246ae6-ba49-4734-a349-3cfb0e1f7ba5 */
public class CommentFileRepository implements ICommentRepository, IFileRepository<Comment> {
   /** @pdOid d3b690d8-8802-4a9d-9fa6-56888dcbe13f */
   private String path;

	@Override
	public Comment getById(Integer key) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public ArrayList<Comment> getAll() {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public Boolean save(Comment value) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public Boolean update(Comment value) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public Boolean delete(Integer key) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean writeToFile(ArrayList<Comment> values) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public ArrayList<Comment> readFromFile() {
		// TODO Auto-generated method stub
		return null;
	}

}