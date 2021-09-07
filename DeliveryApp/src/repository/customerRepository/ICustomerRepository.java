/***********************************************************************
 * Module:  ICostumerRepository.java
 * Author:  graho
 * Purpose: Defines the Interface ICostumerRepository
 ***********************************************************************/
package repository.customerRepository;

import model.Cart;
import model.Customer;
import model.User;
import repository.IRepository;

/** @pdOid ae10ebcb-1fa3-4672-93a1-56cf21bef034 */
public interface ICustomerRepository extends IRepository<Integer, Customer> {

	Customer update(User value);

	Customer updateCart(int id, Cart cart);
}