package services;

import java.util.ArrayList;

import model.Comment;
import model.CommentStatus;
import model.Restaurant;
import repository.commentRepository.CommentFileRepository;
import repository.commentRepository.ICommentRepository;

public class CommentsService {
	private ICommentRepository commentRepository;
	private RestaurantsService restaurantsService;
	
	public CommentsService() {
		commentRepository = new CommentFileRepository();
		restaurantsService = new RestaurantsService();
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
		
		double newRating = calculateRating(comment.getRestaurantId());
		restaurantsService.refreshRating(comment.getRestaurantId(), newRating);
	}
	
	public void declineComment(int id) {
		Comment comment = commentRepository.getById(id);
		comment.setStatus(CommentStatus.DECLINED);
		commentRepository.update(comment);
		
	}
	
	private double calculateRating(int restaurantId) {
		double sum = 0;
		ArrayList<Comment> comments = getAllByRestaurantId(restaurantId);
		
		if (comments.size() == 0) {
			return 0;
		}
		
		for (Comment comment : comments) {
			sum += comment.getRating();
		}
		
		return sum / comments.size();
	}
}
