//NOTES - 

//public
public var galleryRows : int = 4;
public var galleryWidth : float = 0.2f;
//private
private var colComponent : BoxCollider2D;
//static

function Start()
{
	colComponent = GetComponent(BoxCollider2D);
	
	colComponent.size = new Vector2(Screen.width * galleryWidth, Screen.height / galleryRows);
}