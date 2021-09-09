package exceptions;

import javax.ws.rs.core.Response.Status;

public class UnauthorizedException extends HttpException {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public UnauthorizedException(String message) {
		super(Status.UNAUTHORIZED, message);
	}
}
