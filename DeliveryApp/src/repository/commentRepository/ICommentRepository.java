/***********************************************************************
 * Module:  ICommentRepository.java
 * Author:  graho
 * Purpose: Defines the Interface ICommentRepository
 ***********************************************************************/
package repository.commentRepository;

import java.util.ArrayList;

import model.Comment;
import repository.IRepository;

/** @pdOid 8a72e1e2-35cc-4280-9671-5b696567343b */
public interface ICommentRepository extends IRepository<Integer, Comment> {
	ArrayList<Comment> getAllByRestaurantId(int restaurantId);
	ArrayList<Comment> getApprovedByRestaurantId(int restaurantId);
}