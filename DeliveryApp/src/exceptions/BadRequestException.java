package exceptions;

import javax.ws.rs.core.Response.Status;

public class BadRequestException extends HttpException {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public BadRequestException(String message) {
		super(Status.BAD_REQUEST, message);
	}
}
