package exceptions;

import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

public abstract class HttpException extends WebApplicationException {

    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public HttpException(Status statusCode, String message) {
        super(Response.status(statusCode)
       		 .entity(message)
       		 .type("application/json")
       		 .build());
    }
}