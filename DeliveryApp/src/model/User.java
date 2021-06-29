/***********************************************************************
 * Module:  User.java
 * Author:  Luka
 * Purpose: Defines the Class User
 ***********************************************************************/
package model;

import java.util.Date;

/** @pdOid 62d3bdbb-8584-4eb2-98ff-351eb26e51c6 */
public class User {
   /** @pdOid 5619f018-2def-4ae0-81df-b5c40e5bcaa1 */
   private String username;
   /** @pdOid 5c311e54-dfe9-490f-b08c-1aaa1d629a7b */
   private String password;
   /** @pdOid 483a3e91-9c01-4825-99d6-33ce7bab92c0 */
   private String firstName;
   /** @pdOid 36830333-af71-44c4-8438-7d22c6ada2ae */
   private String lastName;
   /** @pdOid abfb6d26-e448-48c8-bfef-d77ece53a936 */
   private Gender gender;
   /** @pdOid 4e0c9454-3cff-4732-8029-34e7efb0723e */
   private Date dateOfBirth;
   /** @pdOid 3bbe1cfb-99f7-441a-9dd1-048c8875a312 */
   private Role role;

}