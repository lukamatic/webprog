package services;

import java.util.ArrayList;

import model.Comment;
import repository.commentRepository.CommentFileRepository;
import repository.commentRepository.ICommentRepository;

public class CommentsService {
private ICommentRepository commentRepository;
	
	public CommentsService() {
		commentRepository = new CommentFileRepository();
	}
	
	public ArrayList<Comment> getAllByRestaurantId(int id) {
		return commentRepository.getAllByRestaurantId(id);
	}
	
	public ArrayList<Comment> getApprovedByRestaurantId(int id) {
		return commentRepository.getApprovedByRestaurantId(id);
	}
}
