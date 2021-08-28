package services;

import model.User;

public class AuthService {
	private UsersService usersService;
	
	public AuthService() {
		usersService = new UsersService();
	}
	
	public User validateUser(String username, String password) {
		User user = usersService.getByUsername(username);
		if (user == null || !user.getPassword().equals(password)) {
			return null;
		}
		return user;
	}
}
