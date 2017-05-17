//NOTES - Simply add to arrays to add more entries

//public
public var clickObjects : GameObject[];
public var area1Images : Texture[];
public var area2Images : Texture[];
public var area3Images : Texture[];
public var area4Images : Texture[];

public var imgBox1 : GameObject;
public var imgBox2 : GameObject;
public var imgBox3 : GameObject;
public var imgBox4 : GameObject;
//private
private var galleryImgA : Texture;
private var galleryImgB : Texture;
private var galleryImgC : Texture;
private var galleryImgD : Texture;

private var imgBox1Component : UI.RawImage;
private var imgBox2Component : UI.RawImage;
private var imgBox3Component : UI.RawImage;
private var imgBox4Component : UI.RawImage;
//static

function Start()
{
	imgBox1Component = imgBox1.GetComponent(UI.RawImage);
	imgBox2Component = imgBox2.GetComponent(UI.RawImage);
	imgBox3Component = imgBox3.GetComponent(UI.RawImage);
	imgBox4Component = imgBox4.GetComponent(UI.RawImage);	
}

function loadImages()
{
	var imageStack : Texture[];
	
	for(var i : int = 0; i < clickObjects.length; i++)
	{
		if(tapClick.collisionString == clickObjects[i].name)
		{
			if(i == 0)
			{
				imageStack = area1Images;
			}
			if(i == 1)
			{
				imageStack = area2Images;
			}
			if(i == 2)
			{
				imageStack = area3Images;
			}
			if(i == 3)
			{
				imageStack = area4Images;
			}
			
			imgBox1Component.texture = imageStack[0];
			imgBox2Component.texture = imageStack[1];
			imgBox3Component.texture = imageStack[2];
			imgBox4Component.texture = imageStack[3];
		}
	}
}