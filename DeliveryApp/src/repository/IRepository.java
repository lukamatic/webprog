/***********************************************************************
 * Module:  IRepository.java
 * Author:  graho
 * Purpose: Defines the Interface IRepository
 ***********************************************************************/
package repository;

import java.util.ArrayList;

/** @pdOid 4cc53f38-7adf-4357-9827-0342f1a2fada */
public interface IRepository <TKey,TValue> {
   /** @pdOid a871a395-c77a-4d6e-92a0-4202a18ae732 */
   TValue getById(TKey key);
   /** @pdOid acc87720-4544-425f-ba56-a420046721ba */
   ArrayList<TValue> getAll();
   /** @param value
    * @pdOid 40343b2b-6049-472d-aad5-b530c86e863b */
   Boolean save(TValue value);
   /** @param value
    * @pdOid 780a56ac-0bf1-42d5-a66b-2dab2c8d4806 */
   Boolean update(TValue value);
   /** @param key
    * @pdOid 2e40230f-ca81-439c-85c0-8f26a41b4315 */
   Boolean delete(TKey key);

}