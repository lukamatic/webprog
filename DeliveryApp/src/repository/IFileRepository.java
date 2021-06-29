/***********************************************************************
 * Module:  IFileRepository.java
 * Author:  Luka
 * Purpose: Defines the Interface IFileRepository
 ***********************************************************************/
package repository;

import java.util.ArrayList;

/** @pdOid 91d75980-4c96-41a2-b828-bcd4b01ad07b */
public interface IFileRepository <T> {
   /** @param values
    * @pdOid d47404ed-20b4-446e-9e41-a94ede18b22c */
   boolean writeToFile(ArrayList<T> values);
   /** @pdOid e43b45fc-7674-41db-8416-668072d359f0 */
   ArrayList<T> readFromFile();

}