/***********************************************************************
 * Module:  Article.java
 * Author:  Luka
 * Purpose: Defines the Class Article
 ***********************************************************************/
package model;

/** @pdOid efdceba1-a754-48d3-8f86-d567e36fcb1c */
public class Article {
   /** @pdOid 6efc47a5-facb-4fba-bde9-a5fb6447e42f */
   private int id;
   /** @pdOid 57a06999-1fe3-4414-b57d-83360ffdb63f */
   private int name;
   /** @pdOid 576c70c4-6344-4c8a-b690-635c4a8f9ba9 */
   private double price;
   /** @pdOid 0c100a04-35eb-4ecf-bb42-56a684e518db */
   private ArticleType articleType;
   /** @pdOid 9bfa86ce-bcdc-4e40-a9ce-5cdac5fce3b0 */
   private int restaurantId;
   /** @pdOid d81075be-c502-48d8-be6b-22311bb270b8 */
   private String description;
   /** @pdOid cd9850e1-e3b4-46ed-88bb-6a51495880b4 */
   private String imagePath;
   
   /** @pdRoleInfo migr=no name=ArticleSize assc=association5 mult=1..1 */
   private ArticleSize articleSize;

}