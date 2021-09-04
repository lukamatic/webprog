/***********************************************************************
 * Module:  ArticleSize.java
 * Author:  Luka
 * Purpose: Defines the Class ArticleSize
 ***********************************************************************/
package model;

public class ArticleSize {
   private int ammount;
   private Unit unit;
   
	public ArticleSize(int ammount, Unit unit) {
		super();
		this.ammount = ammount;
		this.unit = unit;
	}

	public int getAmmount() {
		return ammount;
	}

	public void setAmmount(int ammount) {
		this.ammount = ammount;
	}

	public Unit getUnit() {
		return unit;
	}

	public void setUnit(Unit unit) {
		this.unit = unit;
	}

}