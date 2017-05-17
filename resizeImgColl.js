#pragma strict

function Start ()
{
	var imgCollComponent : BoxCollider2D;
	imgCollComponent = GetComponent(BoxCollider2D);
	
	imgCollComponent.size = new Vector2(Screen.width, Screen.height);
}
