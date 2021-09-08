package model;

public class CartItem {
	private Article article;
	private int count;
	public CartItem(Article article, int count) {
		super();
		this.article = article;
		this.count = count;
	}
	
	public CartItem() {
		super();
	}
	public Article getArticle() {
		return article;
	}
	public void setArticle(Article article) {
		this.article = article;
	}
	public int getCount() {
		return count;
	}
	public void setCount(int count) {
		this.count = count;
	}
	
	
	
}
