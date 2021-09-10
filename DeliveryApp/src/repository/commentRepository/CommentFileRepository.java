/***********************************************************************
 * Module:  CommentFileRepository.java
 * Author:  Luka
 * Purpose: Defines the Class CommentFileRepository
 ***********************************************************************/
package repository.commentRepository;

import java.io.FileWriter;
import java.io.IOException;
import java.lang.reflect.Type;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

import model.Comment;
import model.CommentStatus;
import model.Customer;
import model.Deliverer;
import repository.IFileRepository;

public class CommentFileRepository implements ICommentRepository, IFileRepository<Comment> {

   private String path = "FileStorage/comments.json";

	@Override
	public Comment getById(Integer key) {
		ArrayList<Comment> comments = getAll();
		
		for (Comment comment : comments) {
			if (comment.getId() == key) {
				return comment;
			}
		}
		return null;
	}
	
	@Override
	public ArrayList<Comment> getAll() {
		
		return readFromFile();
	}
	
	@Override
	public Comment save(Comment value) {
		ArrayList<Comment> comments = getAll();
		comments.add(value);
		writeToFile(comments);
		return value;
	}
	
	@Override
	public Comment update(Comment value) {
		ArrayList<Comment> comments = getAll();

		for (int i = 0; i < comments.size(); i++) {
			if (comments.get(i).getId() == value.getId()) {
				comments.set(i, value);
			}
		}
		writeToFile(comments);
		return value;
	}
	
	@Override
	public Boolean delete(Integer key) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean writeToFile(ArrayList<Comment> values) {
		Gson gson = new Gson();
        String json = gson.toJson(values);

        FileWriter fileWriter = null;

        try {
            //System.out.println(Paths.get(path).toAbsolutePath().toString());
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
	public ArrayList<Comment> readFromFile() {
		Gson gson = new Gson();

        try {
            String json = new String(Files.readAllBytes(Paths.get(path)));

            Type listType = new TypeToken<ArrayList<Comment>>(){}.getType();
            return gson.fromJson(json, listType);
        } catch (IOException e) {
            e.printStackTrace();
        }
        
        return null;
	}

	
	

	@Override
	public ArrayList<Comment> getAllByRestaurantId(int restaurantId) {
		/*Comment c1 = new Comment(0, 1, 0, "Odlicna hrana i brza dostava, sve je ostalo toplo :)\n Porucicemo ponovo.", 5.00, CommentStatus.APPROVED);
		Comment c2 = new Comment(1, 1, 1, "okej hrana", 3.00, CommentStatus.APPROVED);
		Comment c3 = new Comment(2, 0, 0, "Sve super, ali visoke cene dostave. ", 4.00, CommentStatus.PENDING);
		Comment c4 = new Comment(3, 1, 0, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 5.00, CommentStatus.APPROVED);
		Comment c5 = new Comment(4, 0, 0, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 4.00, CommentStatus.PENDING);
		ArrayList<Comment> allComments = new ArrayList<Comment>();// = this.readFromFile();
		allComments.add(c1);
		allComments.add(c2);
		allComments.add(c3);
		allComments.add(c4);
		allComments.add(c5);
		this.writeToFile(allComments);
		*/
		ArrayList<Comment> allComments = this.readFromFile();
		ArrayList<Comment> comments = new ArrayList<Comment>();
		for (Comment c : allComments) {
			if (c.getRestaurantId() == restaurantId)
				comments.add(c); 
		}
		return comments;
	}

	@Override
	public ArrayList<Comment> getApprovedByRestaurantId(int restaurantId) {
		ArrayList<Comment> allComments = this.readFromFile();
		ArrayList<Comment> comments = new ArrayList<Comment>();
		for (Comment c : allComments) {
			if (c.getRestaurantId() == restaurantId && c.getStatus() == CommentStatus.APPROVED)
				comments.add(c); 
		}
		return comments;
	}

}