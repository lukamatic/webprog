package services;

import java.util.ArrayList;

import model.Comment;
import model.CommentStatus;
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

	public void approveComment(int id) {
		Comment comment = commentRepository.getById(id);
		comment.setStatus(CommentStatus.APPROVED);
		commentRepository.update(comment);	
	}
	
	public void declineComment(int id) {
		Comment comment = commentRepository.getById(id);
		comment.setStatus(CommentStatus.DECLINED);
		commentRepository.update(comment);
		
	}
}
